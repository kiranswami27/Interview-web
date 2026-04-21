'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, Bell, Lock, User, Palette, Database } from 'lucide-react';

const theme = {
  primary: '#4338CA',
  primaryHover: '#3730A3',
  secondary: '#10B981',
  bg: '#0F172A',
  surface: '#1E293B',
  surfaceLight: '#334155',
  border: '#334155',
  textPrimary: '#F8FAFC',
  textSecondary: '#94A3B8',
  accent: '#3B82F6'
};

export default function Settings() {
  const router = useRouter();

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: theme.textPrimary, fontFamily: 'Inter, sans-serif', padding: '2rem' }}>
      <button onClick={() => router.back()} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', color: theme.primary, cursor: 'pointer', fontSize: '1rem', fontWeight: 600, marginBottom: '2rem' }}>
        <ArrowLeft size={20} /> Back
      </button>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '3rem', fontFamily: 'Inter Tight, sans-serif' }}>Settings</h1>

        {/* Account Settings */}
        <div style={{ background: theme.surface, border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '2rem', marginBottom: '1.5rem', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <User size={24} color={theme.primary} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, fontFamily: 'Inter Tight, sans-serif' }}>Account Settings</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ paddingBottom: '1rem', borderBottom: `1px solid ${theme.border}` }}>
              <p style={{ fontSize: '0.9rem', color: theme.textSecondary, margin: '0 0 0.5rem 0' }}>Email Address</p>
              <p style={{ fontSize: '1rem', margin: 0, fontWeight: 500 }}>user@example.com</p>
            </div>
            <button style={{ padding: '0.75rem 1.5rem', background: theme.primary, color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', alignSelf: 'flex-start', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = theme.primaryHover} onMouseLeave={(e) => e.currentTarget.style.background = theme.primary}>
              Change Password
            </button>
          </div>
        </div>

        {/* Notification Settings */}
        <div style={{ background: theme.surface, border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '2rem', marginBottom: '1.5rem', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Bell size={24} color={theme.accent} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, fontFamily: 'Inter Tight, sans-serif' }}>Notifications</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['Email Notifications', 'Interview Reminders', 'Progress Updates', 'New Resources'].map((setting, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: i !== 3 ? `1px solid ${theme.border}` : 'none' }}>
                <label style={{ fontSize: '0.95rem', fontWeight: 500 }}>{setting}</label>
                <input type="checkbox" defaultChecked style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: theme.primary }} />
              </div>
            ))}
          </div>
        </div>

        {/* Privacy & Security */}
        <div style={{ background: theme.surface, border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '2rem', marginBottom: '1.5rem', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Lock size={24} color={theme.secondary} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, fontFamily: 'Inter Tight, sans-serif' }}>Privacy & Security</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ color: theme.textSecondary, fontSize: '0.95rem', margin: 0 }}>Manage your privacy settings and security preferences</p>
            <button style={{ padding: '0.75rem 1.5rem', background: theme.surface, border: `1px solid ${theme.border}`, color: theme.textPrimary, borderRadius: '8px', fontWeight: 600, cursor: 'pointer', alignSelf: 'flex-start', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = theme.primary; e.currentTarget.style.background = theme.surfaceLight; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = theme.border; e.currentTarget.style.background = theme.surface; }}>
              View Privacy Policy
            </button>
          </div>
        </div>

        {/* Data & Storage */}
        <div style={{ background: theme.surface, border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '2rem', marginBottom: '1.5rem', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Database size={24} color={theme.primary} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, fontFamily: 'Inter Tight, sans-serif' }}>Data & Storage</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ color: theme.textSecondary, fontSize: '0.95rem', margin: 0 }}>Manage your data and export your information</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button style={{ padding: '0.75rem 1.5rem', background: theme.surface, border: `1px solid ${theme.border}`, color: theme.textPrimary, borderRadius: '8px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = theme.primary; e.currentTarget.style.background = theme.surfaceLight; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = theme.border; e.currentTarget.style.background = theme.surface; }}>
                Export Data
              </button>
              <button style={{ padding: '0.75rem 1.5rem', background: theme.surface, border: `1px solid #EF4444`, color: '#EF4444', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = theme.surface; }}>
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
