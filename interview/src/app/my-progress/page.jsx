'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, TrendingUp, LineChart, Target, Award } from 'lucide-react';

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

export default function MyProgress() {
  const router = useRouter();

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: theme.textPrimary, fontFamily: 'Inter, sans-serif', padding: '2rem' }}>
      <button onClick={() => router.back()} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', color: theme.primary, cursor: 'pointer', fontSize: '1rem', fontWeight: 600, marginBottom: '2rem' }}>
        <ArrowLeft size={20} /> Back
      </button>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', fontFamily: 'Inter Tight, sans-serif' }}>My Progress</h1>
        <p style={{ color: theme.textSecondary, marginBottom: '3rem', fontSize: '1.1rem' }}>Track your interview preparation journey and see your improvement over time.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {/* Progress Card 1 */}
          <div style={{ background: theme.surface, border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '2rem', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>Total Interviews</h3>
              <Target size={24} color={theme.primary} />
            </div>
            <p style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.5rem 0' }}>12</p>
            <p style={{ color: theme.textSecondary, fontSize: '0.9rem' }}>+2 this week</p>
          </div>

          {/* Progress Card 2 */}
          <div style={{ background: theme.surface, border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '2rem', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>Average Score</h3>
              <LineChart size={24} color={theme.secondary} />
            </div>
            <p style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.5rem 0' }}>78%</p>
            <p style={{ color: theme.textSecondary, fontSize: '0.9rem' }}>+5% improvement</p>
          </div>

          {/* Progress Card 3 */}
          <div style={{ background: theme.surface, border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '2rem', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>Achievements</h3>
              <Award size={24} color={theme.accent} />
            </div>
            <p style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.5rem 0' }}>5</p>
            <p style={{ color: theme.textSecondary, fontSize: '0.9rem' }}>Keep going!</p>
          </div>
        </div>

        <div style={{ background: theme.surface, border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '2rem', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', fontFamily: 'Inter Tight, sans-serif' }}>Progress Metrics</h2>
          <p style={{ color: theme.textSecondary, marginBottom: '1.5rem' }}>Your detailed performance analytics will appear here as you complete more interviews.</p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {['Technical Skills', 'Communication', 'Problem Solving', 'Time Management'].map((skill, i) => (
              <div key={i} style={{ flex: '1', minWidth: '150px', background: theme.bg, border: `1px solid ${theme.border}`, borderRadius: '8px', padding: '1rem' }}>
                <p style={{ fontSize: '0.875rem', color: theme.textSecondary, marginBottom: '0.5rem' }}>{skill}</p>
                <div style={{ height: '8px', background: theme.surfaceLight, borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', background: theme.primary, width: `${70 + Math.random() * 30}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
