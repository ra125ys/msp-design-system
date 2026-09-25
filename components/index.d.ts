// Muslim Social Platform — window.MSP. React 18 на странице.
export type IconName = 'home'|'search'|'plus'|'create'|'user'|'mail'|'bell'|'lock'|'shield'|'back'|'close'|'chevron'|'pin'|'music'|'tag'|'grid'|'tagged'|'check'|'dots';
export function Icon(p: { name: IconName; size?: number; strokeWidth?: number; label?: string; className?: string }): JSX.Element;
export function Mark(p: { size?: number }): JSX.Element;
export function Button(p: { variant?: 'primary'|'secondary'|'ghost'; size?: 'lg'|'md'|'sm'; full?: boolean; pressed?: boolean; disabled?: boolean; onClick?: () => void; children: React.ReactNode }): JSX.Element;
export function IconButton(p: { icon: IconName; label: string; badge?: number|string; onClick?: () => void }): JSX.Element;
export function Chip(p: { selected?: boolean; onClick?: () => void; children: React.ReactNode }): JSX.Element;
export function BusinessBadge(p: { category: string }): JSX.Element;
/** Строка с замком. bare — без подложки, как под шапкой поста в ленте. */
export function WallNote(p: { bare?: boolean; children: React.ReactNode }): JSX.Element;
/** Управляемый вопрос о поле. Умолчания нет: value null, пока автор не ответил. */
export function GenderQuestion(p: { category: string; question?: string; hint?: string; reach?: React.ReactNode; value: 'yes'|'no'|null; onChange: (v: 'yes'|'no') => void }): JSX.Element;
export function PostActions(p: { likes?: number|string; replies?: number|string; liked?: boolean; saved?: boolean; onLike?: () => void; onReply?: () => void; onSend?: () => void; onSave?: () => void }): JSX.Element;
export function SegmentedControl(p: { options: { id: string; label: string }[]; value: string; onChange: (id: string) => void; label?: string }): JSX.Element;
/** Четыре вкладки и кнопка создания посередине. Состояние держит потребитель. */
export function TabBar(p: { active: string; onChange: (id: string) => void; onCreate?: () => void; items?: ({ id: string; label: string; icon: IconName }|null)[] }): JSX.Element;
export function ListRow(p: { icon?: IconName; label: string; value?: string; onClick?: () => void }): JSX.Element;
export function ListRows(p: { children: React.ReactNode }): JSX.Element;
export function ProfileStats(p: { items: { value: string; label: string }[] }): JSX.Element;
export function PostCard(p: { handle: string; meta: string; business?: string; wallText?: string; photo?: boolean|React.ReactNode; photoStyle?: React.CSSProperties; photoAlt?: string; avatarStyle?: React.CSSProperties; caption: string; tags?: string; likes?: number|string; replies?: number|string; onLike?: () => void; onReply?: () => void; onSend?: () => void; onSave?: () => void; onMore?: () => void }): JSX.Element;
export const icons: IconName[];
