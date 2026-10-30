const screens = {
  'control-room': ['01 / 04', 'Your session. At a glance.', 'Start your camera, check tracking and take control when you’re ready. Live Mac control always starts with you.', 'Control room: start the camera, open practice and enable Mac control'],
  practice: ['02 / 04', 'Find your flow. One gesture at a time.', 'Follow 22 animated 3D lessons and explore the practice playground. Practice gestures stay inside the app.', 'Practice: an animated 3D hand lesson beside the interactive playground'],
  'gesture-library': ['03 / 04', 'Every gesture. Yours to explore.', 'Search the full collection, watch a lesson, test an action on a selected Mac app or turn individual gestures off.', 'Gesture library: searchable gesture cards with Watch & learn and Try on Mac buttons'],
  settings: ['04 / 04', 'Make it feel like you.', 'Choose your camera and display. Adjust pointer response, pinch tolerance, swipe travel, scroll speed and the floating camera feed.', 'Settings: camera, display, floating feed and gesture sensitivity controls']
};
const tabs = [...document.querySelectorAll('[data-screen]')];
function showScreen(tab, focus = false) {
  tabs.forEach(button => { const selected = button === tab; button.setAttribute('aria-selected', String(selected)); button.tabIndex = selected ? 0 : -1; });
  const name = tab.dataset.screen;
  const [number, title, copy, alt] = screens[name];
  const image = document.querySelector('#product-screen');
  image.src = `assets/${name}.png`; image.alt = alt;
  document.querySelector('#screen-number').textContent = number;
  document.querySelector('#screen-title').textContent = title;
  document.querySelector('#screen-copy').textContent = copy;
  document.querySelector('#screen-panel').setAttribute('aria-labelledby', tab.id);
  if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => showScreen(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); showScreen(tabs[next], true); }
  });
});

const grid = document.querySelector('#gesture-grid');
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  grid.querySelectorAll('.gesture-card').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
}));
const demoMessages = { point: 'Move your hand. Move your pointer.', click: 'Pinch. Release. Click.', swipe: 'A sweep to your next Space.' };
document.querySelectorAll('.motion-choice').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.motion-choice').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  const stage = document.querySelector('.motion-stage'); stage.dataset.demo = button.dataset.demo;
  stage.querySelector('.demo-result').textContent = demoMessages[button.dataset.demo];
}));
