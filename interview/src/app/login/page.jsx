'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { quickLogin } from '@/lib/local-auth';
import { signUpWithEmailAndPassword } from '@/lib/local-auth'
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Bot, LogIn, LayoutDashboard, ArrowRight } from 'lucide-react';

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

const formSchema = z.object({
  email: z.string().email('Invalid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters.')
});



export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data) => {
    try {
      await quickLogin(data.email, data.password);
      toast({
        title: 'Login Successful',
        description: 'Welcome back!'
      });
      router.push('/');
    } catch {
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: 'Invalid credentials. Please try again.'
      });
    }
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.bg, padding: '1rem', position: 'relative', color: theme.textPrimary, fontFamily: 'Inter, sans-serif' }}>
       <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: theme.textPrimary, fontWeight: 600, fontSize: '0.9rem', padding: '0.75rem 1rem', borderRadius: '6px', border: `1px solid ${theme.border}`, transition: 'all 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.background = theme.surface} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
            ← Back to Home
          </Link>
      </div>
      <div style={{ width: '100%', maxWidth: '400px', background: theme.surface, border: `1px solid ${theme.border}`, padding: '2.5rem', borderRadius: '12px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', background: theme.primary, borderRadius: '12px', marginBottom: '1rem' }}>
            <LogIn size={32} color="#fff" />
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 0.5rem 0', color: theme.textPrimary, fontFamily: 'Inter Tight, sans-serif' }}>Welcome Back</h1>
          <p style={{ fontSize: '0.95rem', color: theme.textSecondary, margin: 0 }}>Sign in to your account to continue</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) =>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: 600, fontSize: '0.9rem', color: theme.textPrimary }}>Email</label>
                  <Input placeholder="you@example.com" {...field} style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: `1px solid ${theme.border}`, background: theme.bg, color: theme.textPrimary, fontSize: '0.95rem', transition: 'all 0.2s' }} onFocus={(e) => e.target.style.borderColor = theme.primary} onBlur={(e) => e.target.style.borderColor = theme.border} />
                  {form.formState.errors.email && <span style={{ color: '#EF4444', fontSize: '0.8rem' }}>{form.formState.errors.email.message}</span>}
              </div>
              } />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) =>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: 600, fontSize: '0.9rem', color: theme.textPrimary }}>Password</label>
                  <Input type="password" placeholder="••••••••" {...field} style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: `1px solid ${theme.border}`, background: theme.bg, color: theme.textPrimary, fontSize: '0.95rem', transition: 'all 0.2s' }} onFocus={(e) => e.target.style.borderColor = theme.primary} onBlur={(e) => e.target.style.borderColor = theme.border} />
                  {form.formState.errors.password && <span style={{ color: '#EF4444', fontSize: '0.8rem' }}>{form.formState.errors.password.message}</span>}
              </div>
              } />
            
            <button type="submit" disabled={form.formState.isSubmitting} style={{ width: '100%', marginTop: '1rem', padding: '0.875rem 1.5rem', fontSize: '1rem', fontWeight: 600, borderRadius: '8px', border: 'none', background: theme.primary, color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = theme.primaryHover} onMouseLeave={(e) => e.currentTarget.style.background = theme.primary}>
              {form.formState.isSubmitting ? 'Logging in...' : 'Login'}
              <LogIn size={18} />
            </button>
          </form>
        </Form>
        <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.95rem', color: theme.textSecondary }}>
          Don't have an account?{' '}
          <Link href="/signup" style={{ color: theme.primary, textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.color = theme.primaryHover} onMouseLeave={(e) => e.currentTarget.style.color = theme.primary}>
            Sign up
          </Link>
        </div>
      </div>
    </main>);

}