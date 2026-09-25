// Muslim Social Platform — window.MSP. Expects React 18 on the page. Labels default to English; pass `labels` to localise.
export type IconName = 'home'|'search'|'plus'|'create'|'user'|'mail'|'bell'|'lock'|'shield'|'back'|'close'|'chevron'|'pin'|'music'|'tag'|'grid'|'tagged'|'check'|'dots';
export function Icon(p: { name: IconName; size?: number; strokeWidth?: number; label?: string; className?: string }): JSX.Element;
export function Mark(p: { size?: number; label?: string }): JSX.Element;
export function Button(p: { variant?: 'primary'|'secondary'|'ghost'; size?: 'lg'|'md'|'sm'; full?: boolean; pressed?: boolean; disabled?: boolean; onClick?: () => void; children: React.ReactNode }): JSX.Element;
export function IconButton(p: { icon: IconName; label: string; badge?: number|string; onClick?: () => void }): JSX.Element;
export function Chip(p: { selected?: boolean; onClick?: () => void; children: React.ReactNode }): JSX.Element;
/** "Business · Category". `prefix` overrides the word "Business". */
export function BusinessBadge(p: { category: string; prefix?: string }): JSX.Element;
/** The lock line. `bare` — no background, as under a post header in the feed. */
export function WallNote(p: { bare?: boolean; children: React.ReactNode }): JSX.Element;
/** Controlled gender question. No default: `value` is null until the author answers. */
export function GenderQuestion(p: { category: string; question?: string; hint?: string; reach?: React.ReactNode; value: 'yes'|'no'|null; onChange: (v: 'yes'|'no') => void; labels?: { yes?: string; no?: string } }): JSX.Element;
export function PostActions(p: { likes?: number|string; replies?: number|string; liked?: boolean; saved?: boolean; onLike?: () => void; onReply?: () => void; onSend?: () => void; onSave?: () => void; labels?: { like?: string; reply?: string; send?: string; save?: string } }): JSX.Element;
export function SegmentedControl(p: { options: { id: string; label: string }[]; value: string; onChange: (id: string) => void; label?: string }): JSX.Element;
/** Four tabs and a create button in the middle. State lives in the consumer. */
export function TabBar(p: { active: string; onChange: (id: string) => void; onCreate?: () => void; items?: ({ id: string; label: string; icon: IconName }|null)[]; label?: string; createLabel?: string }): JSX.Element;
export function ListRow(p: { icon?: IconName; label: string; value?: string; onClick?: () => void }): JSX.Element;
export function ListRows(p: { children: React.ReactNode }): JSX.Element;
export function ProfileStats(p: { items: { value: string; label: string }[] }): JSX.Element;
export function PostCard(p: { handle: string; meta: string; business?: string; wallText?: string; photo?: boolean|React.ReactNode; photoStyle?: React.CSSProperties; photoAlt?: string; avatarStyle?: React.CSSProperties; caption: string; tags?: string; likes?: number|string; replies?: number|string; labels?: { like?: string; reply?: string; send?: string; save?: string }; moreLabel?: string; onLike?: () => void; onReply?: () => void; onSend?: () => void; onSave?: () => void; onMore?: () => void }): JSX.Element;
export const icons: IconName[];
