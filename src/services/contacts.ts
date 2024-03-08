import type { Contact } from "../types";

import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getContacts(query?: string): Promise<Contact[]> {
  await fakeNetwork(`getContacts:${query}`);
  let contacts: Contact[] = (await localforage.getItem("contacts")) ?? [];
  if (query) {
    contacts = matchSorter<Contact>(contacts, query, {
      keys: ["first", "last"],
    });
  }
  return contacts.sort(sortBy("last", "createdAt"));
}

export async function createContact() {
  await fakeNetwork();
  const id: string = crypto.randomUUID();
  const contact: Contact = { id, createdAt: Date.now() };
  const contacts = await getContacts();
  contacts.unshift(contact);
  await set(contacts);
  return contact;
}

export async function getContact(id: string): Promise<Contact | undefined> {
  await fakeNetwork(`contact:${id}`);
  const contacts: Contact[] = (await localforage.getItem("contacts")) ?? [];
  return contacts.find((contact) => contact.id === id);
}

export async function updateContact(id: string, updates: Contact) {
  await fakeNetwork();
  const contacts: Contact[] = (await localforage.getItem("contacts")) ?? [];
  const contact = contacts.find((contact) => contact.id === id);
  if (!contact) throw new Error("No contact found for: " + id);
  Object.assign(contact, updates);
  await set(contacts);
  return contact;
}

export async function deleteContact(id: string) {
  const contacts: Contact[] = (await localforage.getItem("contacts")) ?? [];
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index > -1) {
    contacts.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}

function set(contacts: Contact[]) {
  return localforage.setItem("contacts", contacts);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache: Record<string, boolean> = {};

async function fakeNetwork(key?: string) {
  if (!key) {
    fakeCache = {};
  }

  // eslint-disable-next-line no-prototype-builtins
  if (fakeCache[key!]) {
    return;
  }

  fakeCache[key!] = true;
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}
