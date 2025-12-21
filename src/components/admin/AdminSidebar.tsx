import { FileText, Briefcase, MessageSquare, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AdminSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'blogs', label: 'Blogs', icon: FileText },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'contacts', label: 'Contacts', icon: MessageSquare },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
];

export const AdminSidebar = ({ activeTab, onTabChange }: AdminSidebarProps) => {
  return (
    <aside className="w-64 min-h-[calc(100vh-8rem)] border-r border-border bg-card/50 p-4">
      <nav className="space-y-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all",
              activeTab === tab.id
                ? "bg-primary/20 text-primary border border-primary/50"
                : "hover:bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            <tab.icon className="h-5 w-5" />
            <span className="font-medium">{tab.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};
