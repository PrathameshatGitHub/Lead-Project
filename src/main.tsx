import { createRoot } from 'react-dom/client';
import './design-system/tokens/tokens.css';
import './global.css';
import { LeadPage } from './features/lead/LeadPage';

createRoot(document.getElementById('root')!).render(<LeadPage />);
