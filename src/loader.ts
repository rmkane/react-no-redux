import { getContacts } from "./services/contacts";

async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export { loader };
