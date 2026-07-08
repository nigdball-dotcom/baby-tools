'use client'

import { useState, useCallback, useMemo } from 'react'
import type { DiaperFormState, DiaperResults } from '@/types'

function formatTHB(value: number): string {
  return (
    new Intl.NumberFormat('th-TH', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value) + ' บาท'
  )
}

const AGE_PRESETS = [
  { label: 'แรกเกิด', hint: '0–1 เดือน', value: '10' },
  { label: '1–3 เดือน', value: '8' },
  { label: '3–6 เดือน', value: '7' },
  { label: '6–12 เดือน', value: '6' },
  { label: '1–2 ปี', value: '5' },
  { label: '2+ ปี', value: '4' },
]

const BRAND_PRESETS = [
  { label: 'MamyPoko M', perPack: '60', price: '350' },
  { label: 'BabyLove M', perPack: '60', price: '280' },
  { label: 'Huggies M', perPack: '58', price: '399' },
]

const EMPTY_FORM: DiaperFormState = {
  diapersPerDay: '',
  diapersPerPack: '',
  packPrice: '',
}

function computeResults(form: DiaperFormState): DiaperResults | null {
  const dpd = parseFloat(form.diapersPerDay)
  const dpp = parseFloat(form.diapersPerPack)
  const pp = parseFloat(form.packPrice)
  if (!dpd || !dpp || !pp || dpd <= 0 || dpp <= 0 || pp <= 0) return null
  const costPerDiaper = pp / dpp
  const dailyCost = dpd * costPerDiaper
  return {
    costPerDiaper,
    dailyCost,
    monthlyCost: dailyCost * 30.44,
    yearlyCost: dailyCost * 365,
  }
}

function InputField({
  id,
  label,
  value,
  placeholder,
  hint,
  unit,
  onChange,
}: {
  id: string
  label: string
  value: string
  placeholder: string
  hint?: string
  unit?: string
  onChange: (v: string) => void
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700">
        {label}
      </label>
      {hint && <p className="mt-0.5 text-xs text-gray-400">{hint}</p>}
      <div className="relative mt-2">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min="0"
          step="any"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pr-16 text-base text-gray-900 placeholder:text-gray-300 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
        {unit && (
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
            {unit}
          </span>
        )}
      </div>
    </div>
  )
}

export default function DiaperCalculator() {
  const [form, setForm] = useState<DiaperFormState>(EMPTY_FORM)
  const [activeAge, setActiveAge] = useState<string | null>(null)
  const [activeBrand, setActiveBrand] = useState<string | null>(null)

  const results = useMemo(() => computeResults(form), [form])

  const set = useCallback(
    (key: keyof DiaperFormState) => (value: string) =>
      setForm((prev) => ({ ...prev, [key]: value })),
    [],
  )

  function applyAgePreset(preset: (typeof AGE_PRESETS)[number]) {
    setActiveAge(preset.label)
    setForm((prev) => ({ ...prev, diapersPerDay: preset.value }))
  }

  function applyBrandPreset(preset: (typeof BRAND_PRESETS)[number]) {
    setActiveBrand(preset.label)
    setForm((prev) => ({ ...prev, diapersPerPack: preset.perPack, packPrice: preset.price }))
  }

  function reset() {
    setForm(EMPTY_FORM)
    setActiveAge(null)
    setActiveBrand(null)
  }

  const hasInput = form.diapersPerDay || form.diapersPerPack || form.packPrice

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
      {/* ---- Left: Form ---- */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">กรอกข้อมูลผ้าอ้อม</h2>
            <p className="mt-1 text-sm text-gray-500">
              แก้ไขค่าใดก็ได้ ผลลัพธ์จะอัปเดตทันที
            </p>
          </div>
          {hasInput && (
            <button
              type="button"
              onClick={reset}
              className="ml-4 shrink-0 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-500 transition hover:bg-gray-50"
            >
              เริ่มใหม่
            </button>
          )}
        </div>

        {/* Age quick-select */}
        <div className="mt-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
            อายุลูกน้อย (เพื่อตั้งค่าอัตโนมัติ)
          </p>
          <div className="flex flex-wrap gap-2">
            {AGE_PRESETS.map((p) => (
              <button
                key={p.label}
                type="button"
                onClick={() => applyAgePreset(p)}
                className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                  activeAge === p.label
                    ? 'border-blue-600 bg-blue-600 text-white'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Diaper count input */}
        <div className="mt-5">
          <InputField
            id="diapersPerDay"
            label="จำนวนผ้าอ้อมที่ใช้ต่อวัน"
            value={form.diapersPerDay}
            placeholder="เช่น 8"
            unit="ชิ้น"
            onChange={(v) => {
              setActiveAge(null)
              set('diapersPerDay')(v)
            }}
          />
        </div>

        {/* Brand quick-fill */}
        <div className="mt-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
            ยี่ห้อยอดนิยม (กรอกราคาอัตโนมัติ)
          </p>
          <div className="flex flex-wrap gap-2">
            {BRAND_PRESETS.map((b) => (
              <button
                key={b.label}
                type="button"
                onClick={() => applyBrandPreset(b)}
                className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                  activeBrand === b.label
                    ? 'border-blue-600 bg-blue-600 text-white'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pack size + price inputs */}
        <div className="mt-5 space-y-4">
          <InputField
            id="diapersPerPack"
            label="จำนวนผ้าอ้อมต่อแพ็ก"
            value={form.diapersPerPack}
            placeholder="เช่น 60"
            hint="แพ็กที่คุณซื้อมีผ้าอ้อมกี่ชิ้น?"
            unit="ชิ้น"
            onChange={(v) => {
              setActiveBrand(null)
              set('diapersPerPack')(v)
            }}
          />
          <InputField
            id="packPrice"
            label="ราคาต่อแพ็ก"
            value={form.packPrice}
            placeholder="เช่น 350"
            hint="แพ็กนั้นราคาเท่าไร?"
            unit="บาท"
            onChange={(v) => {
              setActiveBrand(null)
              set('packPrice')(v)
            }}
          />
        </div>
      </div>

      {/* ---- Right: Results ---- */}
      <div className="lg:sticky lg:top-8 lg:self-start">
        {results ? (
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-gray-900">ผลการคำนวณค่าผ้าอ้อม</h2>
            <p className="mt-1 text-sm text-gray-500">
              {form.diapersPerDay} ชิ้น/วัน · {form.diapersPerPack} ชิ้น/แพ็ก ·{' '}
              {form.packPrice} บาท/แพ็ก
            </p>

            {/* Primary result — monthly */}
            <div className="mt-5 rounded-2xl bg-blue-600 p-6 text-white">
              <p className="text-sm font-medium text-blue-200">ค่าใช้จ่ายต่อเดือน</p>
              <p className="mt-1 text-4xl font-extrabold tracking-tight">
                {formatTHB(results.monthlyCost)}
              </p>
              <p className="mt-1 text-sm text-blue-200">≈ {formatTHB(results.dailyCost)} / วัน</p>
            </div>

            {/* Secondary results */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium text-gray-500">ค่าใช้จ่ายต่อปี</p>
                <p className="mt-1 text-lg font-bold text-gray-900">
                  {formatTHB(results.yearlyCost)}
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium text-gray-500">ราคาต่อชิ้น</p>
                <p className="mt-1 text-lg font-bold text-gray-900">
                  {formatTHB(results.costPerDiaper)}
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              * คำนวณจาก 30.44 วัน/เดือนโดยเฉลี่ย
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-10 text-center">
            <div className="text-5xl" aria-hidden="true">
              🧮
            </div>
            <p className="mt-4 text-base font-semibold text-gray-700">
              ผลการคำนวณจะแสดงที่นี่
            </p>
            <p className="mt-1 text-sm text-gray-400">
              กรอกข้อมูลด้านซ้ายเพื่อดูค่าใช้จ่ายทันที
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
