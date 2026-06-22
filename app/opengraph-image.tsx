import { ImageResponse } from 'next/og'
import { SITE_NAME } from '@/lib/config'

export const alt = `${SITE_NAME} - คำนวณค่าผ้าอ้อมเด็กฟรี`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #fff1f2 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <span style={{ fontSize: '72px' }}>🍼</span>
          <span style={{ fontSize: '48px', fontWeight: 800, color: '#111827' }}>
            {SITE_NAME}
          </span>
        </div>
        <div
          style={{
            fontSize: '56px',
            fontWeight: 800,
            color: '#111827',
            textAlign: 'center',
            lineHeight: 1.2,
            maxWidth: '900px',
          }}
        >
          คำนวณค่าผ้าอ้อมเด็ก
        </div>
        <div
          style={{
            fontSize: '32px',
            color: '#2563eb',
            fontWeight: 700,
            marginTop: '16px',
          }}
        >
          ฟรี · ง่าย · ทันที
        </div>
        <div
          style={{
            marginTop: '32px',
            padding: '12px 32px',
            background: '#2563eb',
            borderRadius: '12px',
            color: 'white',
            fontSize: '28px',
            fontWeight: 600,
          }}
        >
          babytools.vercel.app
        </div>
      </div>
    ),
    { ...size },
  )
}
