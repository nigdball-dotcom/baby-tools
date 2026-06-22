'use client'

import { useState, useCallback } from 'react'
import type { DiaperFormState, DiaperResults } from '@/types'

function formatTHB(value: number): string {
  return (
    new Intl.NumberFormat('th-TH', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value) + ' บาท'
  )
}

function ResultCard({
  label,
  value,
  highlight,
}: {
  label: string
  value: string
  highlight?: boolean
}) {
  return (
    <div
      className={`rounded-xl p-5 ${highlight ? 'bg-blue-600 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <p className={`text-sm font-medium ${highlight ? 'text-blue-100' : 'text-gray-500'}`}>
        {label}
      </p>
      <p className={`mt-1 text-2xl font-bold ${highlight ? 'text-white' : 'text-gray-900'}`}>
        {value}
      </p>
    </div>
  )
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
          className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition pr-16"
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

const EMPTY_FORM: DiaperFormState = {
  diapersPerDay: '',
  diapersPerPack: '',
  packPrice: '',
}

export default function DiaperCalculator() {
  const [form, setForm] = useState<DiaperFormState>(EMPTY_FORM)
  const [results, setResults] = useState<DiaperResults | null>(null)
  const [error, setError] = useState<string | null>(null)

  const set = useCallback(
    (key: keyof DiaperFormState) => (value: string) =>
      setForm((prev) => ({ ...prev, [key]: value })),
    [],
  )

  function calculate() {
    setError(null)
    const dpd = parseFloat(form.diapersPerDay)
    const dpp = parseFloat(form.diapersPerPack)
    const pp = parseFloat(form.packPrice)

    if (isNaN(dpd) || isNaN(dpp) || isNaN(pp)) {
      setError('กรุณากรอกข้อมูลให้ครบทั้ง 3 ช่อง')
      return
    }
    if (dpd <= 0 || dpp <= 0 || pp <= 0) {
      setError('ค่าทุกช่องต้องมากกว่า 0')
      return
    }

    const costPerDiaper = pp / dpp
    const dailyCost = dpd * costPerDiaper
    const monthlyCost = dailyCost * 30.44
    const yearlyCost = dailyCost * 365

    setResults({ costPerDiaper, dailyCost, monthlyCost, yearlyCost })
  }

  function reset() {
    setForm(EMPTY_FORM)
    setResults(null)
    setError(null)
  }

  return (
    <div className="mx-auto max-w-lg">
      {/* Input form */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-gray-900">กรอกข้อมูลผ้าอ้อม</h2>
        <p className="mt-1 text-sm text-gray-500">
          กรอกข้อมูล 3 ช่องแล้วกด คำนวณ เพื่อดูผลลัพธ์ทันที
        </p>

        <div className="mt-6 space-y-5">
          <InputField
            id="diapersPerDay"
            label="จำนวนผ้าอ้อมที่ใช้ต่อวัน"
            value={form.diapersPerDay}
            placeholder="เช่น 8"
            hint="ลูกน้อยใช้ผ้าอ้อมกี่ชิ้นต่อวัน? (เด็กแรกเกิดโดยทั่วไป 8–12 ชิ้น)"
            unit="ชิ้น"
            onChange={set('diapersPerDay')}
          />
          <InputField
            id="diapersPerPack"
            label="จำนวนผ้าอ้อมต่อแพ็ก"
            value={form.diapersPerPack}
            placeholder="เช่น 60"
            hint="แพ็กที่คุณซื้อมีผ้าอ้อมกี่ชิ้น?"
            unit="ชิ้น"
            onChange={set('diapersPerPack')}
          />
          <InputField
            id="packPrice"
            label="ราคาต่อแพ็ก"
            value={form.packPrice}
            placeholder="เช่น 350"
            hint="แพ็กนั้นราคาเท่าไร?"
            unit="บาท"
            onChange={set('packPrice')}
          />
        </div>

        {error && (
          <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={calculate}
            className="flex-1 rounded-xl bg-blue-600 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-95"
          >
            คำนวณ
          </button>
          {results && (
            <button
              type="button"
              onClick={reset}
              className="rounded-xl border border-gray-200 px-5 py-3.5 text-base font-medium text-gray-600 transition hover:bg-gray-50 active:scale-95"
            >
              เริ่มใหม่
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      {results && (
        <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-gray-900">ผลการคำนวณค่าผ้าอ้อม</h2>
          <p className="mt-1 text-sm text-gray-500">
            จาก {form.diapersPerDay} ชิ้น/วัน · แพ็กละ {form.diapersPerPack} ชิ้น ·
            ราคา {form.packPrice} บาท
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <ResultCard label="ราคาต่อชิ้น" value={formatTHB(results.costPerDiaper)} />
            <ResultCard label="ค่าใช้จ่ายต่อวัน" value={formatTHB(results.dailyCost)} />
            <ResultCard label="ค่าใช้จ่ายต่อเดือน" value={formatTHB(results.monthlyCost)} highlight />
            <ResultCard label="ค่าใช้จ่ายต่อปี" value={formatTHB(results.yearlyCost)} highlight />
          </div>

          <p className="mt-4 text-xs text-gray-400">
            * คำนวณจาก 30.44 วัน/เดือนโดยเฉลี่ย
          </p>
        </div>
      )}
    </div>
  )
}
