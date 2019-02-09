const { useState } = require('react');
const onChange = require('on-change');

module.exports = (initial = {}) => {
  const [state, update] = useState(initial);
  /* setTimeout because onChange fires before changes are reflected */
  const watched = onChange(state, () => setTimeout(() => update(watched)));
  return watched;
};
