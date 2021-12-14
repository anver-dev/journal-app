import journalApi from "@/api/journalApi";

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get("/entries.json");

  if (data) {
    const entries = [];
    for (const id of Object.keys(data)) {
      entries.push({
        id,
        ...data[id],
      });
    }

    commit("setEntries", entries);
  } else {
    commit("setEntries", []);
  }
};

export const updateEntry = async ({ commit }, entry) => {
  console.log(entry);
  let { id, date, text, image } = entry;
  const newEntry = {
    date,
    text,
    image,
  };

  const responseUpdateEntry = await journalApi.put(
    `/entries/${id}.json`,
    newEntry
  );
  console.log(responseUpdateEntry);

  commit("updateEntry", { ...entry });
};

export const createEntry = async ({ commit }, entry) => {
  const entryToSave = {
    text: entry.text,
    date: entry.date,
    image: entry.image,
  };

  const { data } = await journalApi.post("/entries.json", entryToSave);

  entryToSave["id"] = data.name;

  commit("addEntry", entryToSave);

  return data.name;
};

export const deleteEntry = async ({ commit }, id) => {
  const response = await journalApi.delete(`/entries/${id}.json`);
  commit("deleteEntry", id);
  console.log({ response, commit });
};
