/* @ds-bundle: {"format":4,"namespace":"MSP","components":[{"name":"Icon"},{"name":"Mark"},{"name":"Button"},{"name":"IconButton"},{"name":"Chip"},{"name":"BusinessBadge"},{"name":"WallNote"},{"name":"GenderQuestion"},{"name":"PostActions"},{"name":"SegmentedControl"},{"name":"TabBar"},{"name":"ListRow"},{"name":"ProfileStats"},{"name":"PostCard"}]} */
(function(){
  var React = window.React, h = React.createElement;
  var ICONS = {"home": "<path d=\"M3.5 10.8 12 4l8.5 6.8\"/><path d=\"M5.8 9.6V20h12.4V9.6\"/>", "search": "<circle cx=\"11\" cy=\"11\" r=\"6.4\"/><path d=\"M15.8 15.8 20.5 20.5\"/>", "plus": "<path d=\"M12 6.5v11M6.5 12h11\"/>", "create": "<rect x=\"3.5\" y=\"3.5\" width=\"17\" height=\"17\" rx=\"5\"/><path d=\"M12 8.2v7.6M8.2 12h7.6\"/>", "user": "<circle cx=\"12\" cy=\"8.4\" r=\"3.6\"/><path d=\"M4.8 20c.6-3.8 3.6-6 7.2-6s6.6 2.2 7.2 6\"/>", "mail": "<rect x=\"3\" y=\"5.5\" width=\"18\" height=\"13\" rx=\"3\"/><path d=\"M3.8 7 12 13l8.2-6\"/>", "bell": "<path d=\"M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15z\"/><path d=\"M10 20a2 2 0 0 0 4 0\"/>", "lock": "<rect x=\"5\" y=\"10.5\" width=\"14\" height=\"9.5\" rx=\"2.5\"/><path d=\"M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5\"/>", "shield": "<path d=\"M12 3.5l7 2.8v5.6c0 4-2.9 6.9-7 8.1-4.1-1.2-7-4.1-7-8.1V6.3z\"/><path d=\"M9 12.2l2.2 2.1 3.9-4.2\"/>", "back": "<path d=\"M15 5.5 8.5 12l6.5 6.5\"/>", "close": "<path d=\"M6.5 6.5l11 11M17.5 6.5l-11 11\"/>", "chevron": "<path d=\"M9 5.5l6.5 6.5L9 18.5\"/>", "pin": "<path d=\"M12 21c4-4.6 6.2-7.7 6.2-10.4A6.2 6.2 0 0 0 5.8 10.6C5.8 13.3 8 16.4 12 21z\"/><circle cx=\"12\" cy=\"10.4\" r=\"2.2\"/>", "music": "<path d=\"M9 18V6.2l10-1.8V16\"/><circle cx=\"6.6\" cy=\"18\" r=\"2.6\"/><circle cx=\"16.6\" cy=\"16\" r=\"2.6\"/>", "tag": "<circle cx=\"9\" cy=\"9\" r=\"3\"/><path d=\"M3.8 19c.5-3 2.6-5 5.2-5s4.7 2 5.2 5\"/><circle cx=\"17.5\" cy=\"10\" r=\"2.4\"/><path d=\"M16 15.2c2.4 0 4.2 1.6 4.4 3.8\"/>", "grid": "<rect x=\"3.5\" y=\"3.5\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"13.5\" y=\"3.5\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"3.5\" y=\"13.5\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"13.5\" y=\"13.5\" width=\"7\" height=\"7\" rx=\"1.5\"/>", "tagged": "<path d=\"M5 9.5 12 3l7 6.5V20H5z\"/><circle cx=\"12\" cy=\"11.5\" r=\"2.4\"/>", "check": "<path d=\"M5 12.5l4.5 4.5L19 7.5\"/>", "dots": "<circle cx=\"5.5\" cy=\"12\" r=\"1.6\" fill=\"#808080\" stroke=\"none\"/><circle cx=\"12\" cy=\"12\" r=\"1.6\" fill=\"#808080\" stroke=\"none\"/><circle cx=\"18.5\" cy=\"12\" r=\"1.6\" fill=\"#808080\" stroke=\"none\"/>"};
  function cx(){ var a=[]; for (var i=0;i<arguments.length;i++) if (arguments[i]) a.push(arguments[i]); return a.join(' '); }

  function Icon(p){
    var size = p.size || 24, sw = p.strokeWidth || 1.6;
    return h('svg', { className: cx('msp-icon', p.className), width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
      stroke: 'currentColor', strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round',
      'aria-hidden': p.label ? undefined : true, 'aria-label': p.label, role: p.label ? 'img' : undefined,
      dangerouslySetInnerHTML: { __html: (ICONS[p.name] || '').replace(/#808080/g, 'currentColor') } });
  }
  function Mark(p){
    var s = p.size || 28;
    return h('svg', { className: 'msp-mark', width: s, height: s, viewBox: '0 0 28 28', 'aria-label': p.label || 'Mark', role: 'img' },
      h('circle', { cx: 14, cy: 14, r: 12, fill: 'none', stroke: 'currentColor', strokeWidth: 2.2 }),
      h('path', { d: 'M14 2a12 12 0 0 0 0 24z', fill: 'currentColor' }));
  }
  function Button(p){
    var v = p.variant || 'primary', s = p.size || 'md';
    return h('button', { type: p.type || 'button', className: cx('msp-btn', 'msp-btn--' + v, 'msp-btn--' + s, p.full && 'msp-btn--full', p.className),
      onClick: p.onClick, disabled: p.disabled, 'aria-pressed': p.pressed }, p.children);
  }
  function IconButton(p){
    return h('button', { type: 'button', className: cx('msp-iconbtn', p.className), 'aria-label': p.label, onClick: p.onClick },
      h(Icon, { name: p.icon, size: 24 }),
      p.badge != null ? h('span', { className: 'msp-badge' }, String(p.badge)) : null);
  }
  function Chip(p){
    return h('button', { type: 'button', className: cx('msp-chip', p.selected && 'msp-chip--selected', p.className), 'aria-pressed': !!p.selected, onClick: p.onClick },
      p.selected ? h(Icon, { name: 'check', size: 13, strokeWidth: 2.2 }) : null, p.children);
  }
  function BusinessBadge(p){
    return h('span', { className: 'msp-bizbadge' }, h(Icon, { name: 'shield', size: 12, strokeWidth: 2 }), h('span', null, (p.prefix || 'Business') + ' · ' + (p.category || '')));
  }
  function WallNote(p){
    return h('div', { className: cx('msp-wallnote', p.bare && 'msp-wallnote--bare', p.className) },
      h(Icon, { name: 'lock', size: p.bare ? 13 : 15, strokeWidth: 1.9 }), h('span', null, p.children));
  }
  function GenderQuestion(p){
    var val = p.value || null, on = p.onChange || function(){};
    return h('section', { className: 'msp-gq', 'aria-labelledby': 'msp-gq-q' },
      h('div', { className: 'msp-gq__eyebrow' }, h(Icon, { name: 'shield', size: 15, strokeWidth: 2 }), h('span', null, (p.prefix || 'Business') + ' · ' + (p.category || ''))),
      h('h2', { id: 'msp-gq-q', className: 'msp-gq__q', style: { margin: 0 } }, p.question || 'Show this post to the other gender?'),
      p.hint ? h('p', { className: 'msp-gq__hint', style: { margin: 0 } }, p.hint) : null,
      h('div', { className: 'msp-gq__row', role: 'group', 'aria-label': 'Answer' },
        h(Button, { size: 'lg', variant: val === 'yes' ? 'primary' : 'ghost', pressed: val === 'yes', onClick: function(){ on('yes'); } }, (p.labels && p.labels.yes) || 'Yes'),
        h(Button, { size: 'lg', variant: val === 'no' ? 'primary' : 'ghost', pressed: val === 'no', onClick: function(){ on('no'); } }, (p.labels && p.labels.no) || 'No')),
      p.reach ? h('p', { className: 'msp-gq__reach', style: { margin: '12px 0 0' } }, p.reach) : null);
  }
  function Pill(p){
    return h('button', { type: 'button', className: cx('msp-pill', p.right && 'msp-pill--right'), onClick: p.onClick, 'aria-pressed': p.pressed },
      p.label, p.count != null ? h('span', { className: 'msp-pill__n' }, String(p.count)) : null);
  }
  function PostActions(p){
    var L = Object.assign({ like: 'Like', reply: 'Reply', send: 'Send', save: 'Save' }, p.labels || {});
    return h('div', { className: cx('msp-actions', p.className), role: 'group', 'aria-label': 'Actions' },
      h(Pill, { label: L.like, count: p.likes, onClick: p.onLike, pressed: p.liked }),
      h(Pill, { label: L.reply, count: p.replies, onClick: p.onReply }),
      h(Pill, { label: L.send, onClick: p.onSend }),
      h(Pill, { label: L.save, right: true, onClick: p.onSave, pressed: p.saved }));
  }
  function SegmentedControl(p){
    var opts = p.options || [], val = p.value, on = p.onChange || function(){};
    return h('div', { className: 'msp-seg', role: 'tablist', 'aria-label': p.label },
      opts.map(function(o){ return h('button', { key: o.id, type: 'button', role: 'tab', 'aria-selected': o.id === val,
        className: cx('msp-seg__opt', o.id === val && 'msp-seg__opt--on'), onClick: function(){ on(o.id); } }, o.label); }));
  }
  var DEFAULT_TABS = [{ id: 'feed', label: 'Feed', icon: 'home' }, { id: 'search', label: 'Search', icon: 'search' }, null,
                      { id: 'inbox', label: 'Inbox', icon: 'mail' }, { id: 'profile', label: 'Profile', icon: 'user' }];
  function TabBar(p){
    var tabs = p.items || DEFAULT_TABS, act = p.active, on = p.onChange || function(){};
    return h('nav', { className: 'msp-tabbar', 'aria-label': p.label || 'Sections' },
      tabs.map(function(t, i){
        if (!t) return h('button', { key: 'create', type: 'button', className: 'msp-tab msp-tab--create', 'aria-label': p.createLabel || 'Create', onClick: p.onCreate },
          h('span', { className: 'msp-tab__create' }, h(Icon, { name: 'plus', size: 24, strokeWidth: 2.4 })));
        var on_ = t.id === act;
        return h('button', { key: t.id, type: 'button', className: cx('msp-tab', on_ && 'msp-tab--on'), 'aria-current': on_ ? 'page' : undefined, onClick: function(){ on(t.id); } },
          h(Icon, { name: t.icon, size: 24, strokeWidth: on_ ? 1.9 : 1.6 }), h('span', { className: 'msp-tab__label' }, t.label));
      }));
  }
  function ListRow(p){
    return h('button', { type: 'button', className: 'msp-row', onClick: p.onClick },
      p.icon ? h(Icon, { name: p.icon, size: 22, className: 'msp-row__icon' }) : null,
      h('span', { className: 'msp-row__label' }, p.label),
      p.value != null ? h('span', { className: 'msp-row__value' }, p.value) : null,
      h(Icon, { name: 'chevron', size: 18, strokeWidth: 1.8, className: 'msp-row__chev' }));
  }
  function ListRows(p){ return h('div', { className: 'msp-rows' }, p.children); }
  function ProfileStats(p){
    return h('div', { className: 'msp-stats' }, (p.items || []).map(function(s, i){
      return h('div', { key: i, className: 'msp-stat' }, h('span', { className: 'msp-stat__n' }, s.value), h('span', { className: 'msp-stat__l' }, s.label)); }));
  }
  function PostCard(p){
    var av = h('span', { className: 'msp-avatar', style: Object.assign({ width: 38, height: 38 }, p.avatarStyle || {}) });
    return h('article', { className: 'msp-post' },
      h('div', { className: 'msp-post__head' }, av,
        h('div', { className: 'msp-post__who' },
          h('div', { className: 'msp-post__handle' }, p.handle),
          h('div', { className: 'msp-post__meta' }, p.meta),
          p.business ? h('div', { style: { marginTop: 3 } }, h(BusinessBadge, { category: p.business })) : null),
        h(IconButton, { icon: 'dots', label: p.moreLabel || 'More', onClick: p.onMore })),
      p.wallText ? h(WallNote, { bare: true }, p.wallText) : null,
      p.photo ? h('div', { className: 'msp-post__photo', style: p.photoStyle, role: 'img', 'aria-label': p.photoAlt || '' }, typeof p.photo === 'object' ? p.photo : null) : null,
      h('div', { className: 'msp-post__cap' }, p.caption, p.tags ? h('div', { className: 'msp-post__tags' }, p.tags) : null),
      h(PostActions, { labels: p.labels, likes: p.likes, replies: p.replies, onLike: p.onLike, onReply: p.onReply, onSend: p.onSend, onSave: p.onSave }));
  }
  window.MSP = { Icon: Icon, Mark: Mark, Button: Button, IconButton: IconButton, Chip: Chip, BusinessBadge: BusinessBadge, WallNote: WallNote,
    GenderQuestion: GenderQuestion, PostActions: PostActions, SegmentedControl: SegmentedControl, TabBar: TabBar, ListRow: ListRow, ListRows: ListRows,
    ProfileStats: ProfileStats, PostCard: PostCard, icons: Object.keys(ICONS) };
})();
