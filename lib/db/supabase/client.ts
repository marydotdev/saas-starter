import {
  createClientComponentClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

// Client-side Supabase client (for use in components)
export const createClientSupabase = () => createClientComponentClient();

// Server-side Supabase client (for use in server components/actions)
export const createServerSupabase = () =>
  createServerComponentClient({ cookies });

// Admin Supabase client (for admin operations)
export const createAdminSupabase = () =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
