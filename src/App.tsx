import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import LoginPage from "./components/pages/LoginPage";
import StaffProfile from "./pages/StaffProfile";
import NotFound from "./pages/NotFound";
import { ResetPasswordPage } from "./pages/ResetPassword";
import { DashboardLayout } from "./components/DashboardLayout";
import { OverviewPage } from "./components/pages/OverviewPage";
import { OrderingPage } from "./components/pages/OrderingPage";
import { SuppliersPage } from "./components/pages/SuppliersPage";
import { OutgoingsPage } from "./components/pages/OutgoingsPage";
import { TransactionsPage } from "./components/pages/TransactionsPage";
import { IntegrationsPage } from "./components/pages/IntegrationsPage";
import { StaffWagesPage } from "./components/pages/StaffWagesPage";
import { InvoiceOCRPage } from "./components/pages/InvoiceOCRPage";
import { InventoryTrackerPage } from "./components/pages/InventoryTrackerPage";
import { StaffRosterPage } from "./components/pages/StaffRosterPage";
import { BusinessHealthPage } from "./components/pages/BusinessHealthPage";
import { TasksNotesPage } from "./components/pages/TasksNotesPage";
import { SurveillancePage } from "./components/pages/SurveillancePage";
import { SettingsPage } from "./components/pages/SettingsPage";
import TakingsPage from "./components/pages/TakingsPage";
import LicensesPage from "./components/pages/LicensesPage";
import SubscriptionsPage from "./components/pages/SubscriptionsPage";

const queryClient = new QueryClient();

// Protected Route component
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#102E47] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }
  
  return user ? <>{children}</> : <Navigate to="/login" replace />;
}

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/staff/:id" element={<StaffProfile />} />
              <Route path="/reset-password" element={<ResetPasswordPage />} />
              
              {/* Protected Dashboard Routes */}
              <Route path="/" element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }>
                <Route index element={<OverviewPage />} />
                <Route path="takings" element={<TakingsPage />} />
                <Route path="ordering" element={<OrderingPage />} />
                <Route path="outgoings" element={<OutgoingsPage />} />
                <Route path="suppliers" element={<SuppliersPage />} />
                <Route path="subscriptions" element={<SubscriptionsPage />} />
                <Route path="staff" element={<StaffWagesPage />} />
                <Route path="licenses" element={<LicensesPage />} />
                <Route path="invoice-ocr" element={<InvoiceOCRPage />} />
                <Route path="inventory" element={<InventoryTrackerPage />} />
                <Route path="roster" element={<StaffRosterPage />} />
                <Route path="surveillance" element={<SurveillancePage />} />
                <Route path="health-score" element={<BusinessHealthPage />} />
                <Route path="tasks" element={<TasksNotesPage />} />
                <Route path="transactions" element={<TransactionsPage />} />
                <Route path="integrations" element={<IntegrationsPage />} />
                <Route path="settings" element={<SettingsPage />} />
              </Route>
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;