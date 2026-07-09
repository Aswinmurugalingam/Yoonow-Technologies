function icon(name) {
  const attrs = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
  const paths = {
    monitor: '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M2 19h20"/><path d="M9 19l1-3h4l1 3"/>',
    headset: '<path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="3" y="13" width="4" height="6" rx="1.3"/><rect x="17" y="13" width="4" height="6" rx="1.3"/><path d="M20 19a4 4 0 0 1-4 3h-2"/>',
    network: '<circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v5"/><path d="M12 12l-7 5"/><path d="M12 12l7 5"/>',
    camera: '<rect x="2" y="7" width="14" height="11" rx="1.5"/><path d="M16 10.5l5-2.5v9l-5-2.5"/><circle cx="9" cy="12.5" r="2.6"/>',
    code: '<rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M3 8h18"/><path d="M9 13l-2 2 2 2"/><path d="M15 13l2 2-2 2"/>',
    phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    shield: '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"/><path d="M9 12l2 2 4-4"/>',
    arrow: '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    bolt: '<path d="M13 2L4 14h7l-1 8 10-13h-7l0-7Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3 6.5l9 6.5 9-6.5"/>',
    location: '<path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z"/><circle cx="12" cy="9" r="2.4"/>',
    call: '<path d="M5 4h3l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 3 5.2 2 2 0 0 1 5 4Z"/>',
    server: '<rect x="4" y="4" width="16" height="6" rx="1.2"/><rect x="4" y="14" width="16" height="6" rx="1.2"/><circle cx="8" cy="7" r=".6" fill="currentColor"/><circle cx="8" cy="17" r=".6" fill="currentColor"/>',
    cloud: '<path d="M7 18h10a4 4 0 0 0 .6-7.96A5.5 5.5 0 0 0 7.1 9.1 4.5 4.5 0 0 0 7 18Z"/>',
    printer: '<path d="M6 8.5V3.5h12v5"/><rect x="3" y="8.5" width="18" height="7.5" rx="1.4"/><rect x="7" y="14" width="10" height="6.5" rx="1"/><circle cx="17" cy="11.2" r=".6" fill="currentColor"/>',
  };
  return `<svg ${attrs}>${paths[name] || paths.monitor}</svg>`;
}

module.exports = { icon };
