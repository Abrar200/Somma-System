import { Button } from '@/components/ui/button';
import { LogOut, User } from 'lucide-react';
import type { User as SupabaseUser } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';

interface DashboardHeaderProps {
  onLogout: () => void;
  user: SupabaseUser | null;
}

export const DashboardHeader = ({ onLogout, user }: DashboardHeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      if (onLogout) {
        onLogout();
      }
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b" style={{ borderColor: '#E1D9CD' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <img
              src="/somma.png"
              alt="Somma Greek Restaurant"
              className="h-10 w-auto"
            />
            <div className="h-8 w-px bg-gray-300"></div>
            <h1 className="text-2xl font-bold" style={{ color: '#102E47' }}>
              Somma Admin Panel
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2" style={{ color: '#102E47' }}>
              <User className="h-5 w-5" />
              <span className="text-sm">{user?.email || 'Admin User'}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout} // Use the new handleLogout function
              className="flex items-center space-x-2"
              style={{
                borderColor: '#102E47',
                color: '#102E47'
              }}
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};