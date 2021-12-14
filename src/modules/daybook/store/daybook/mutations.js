export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
};

export const updateEntry = (state, newEntry) => {
  console.log(newEntry, state);

  const indexOldEntry = state.entries.findIndex(
    (entry) => (entry.id = newEntry.id)
  );

  state.entries[indexOldEntry] = newEntry;
};

export const addEntry = (state, entry) => {
  state.entries.unshift(entry);
};

export const deleteEntry = (state, id) => {
  state.entries = state.entries.filter((entry) => entry.id !== id);
};
