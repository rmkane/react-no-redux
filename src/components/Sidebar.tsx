import type { Contact } from "../types";

import { Link, useLoaderData } from "react-router-dom";

type Data = {
  contacts: Contact[];
};

function Sidebar() {
  const { contacts } = useLoaderData() as Data;

  return (
    <aside
      id="sidebar"
      className="flex flex-col border-r-2 border-secondary bg-neutral p-4"
    >
      <h1 className="mb-4 mt-2 text-3xl font-bold text-secondary">
        React Router Contacts
      </h1>
      <div className="mb-4 flex flex-row gap-2">
        <form id="search-form" role="search">
          <input
            id="q"
            className="input input-bordered input-primary w-full max-w-xs"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
          />
          <div id="search-spinner" aria-hidden hidden={true} />
          <div className="sr-only" aria-live="polite"></div>
        </form>
        <form method="post">
          <button className="btn btn-primary" type="submit">
            New
          </button>
        </form>
      </div>
      <nav>
        {/* Old version; static */}
        <ul className="menu w-full rounded-box bg-base-200">
          <li>
            <a href={`/contacts/1`}>Your Name</a>
          </li>
          <li>
            <a href={`/contacts/2`}>Your Friend</a>
          </li>
        </ul>
        <br />
        {/* New version; dynamic */}
        {contacts.length ? (
          <ul className="menu w-full rounded-box bg-base-200">
            {contacts.map((contact) => (
              <li key={contact.id}>
                <Link to={`contacts/${contact.id}`}>
                  {contact.first || contact.last ? (
                    <>
                      {contact.first} {contact.last}
                    </>
                  ) : (
                    <i>No Name</i>
                  )}
                  {contact.favorite && <span>★</span>}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <i>No contacts</i>
          </p>
        )}
      </nav>
    </aside>
  );
}

export default Sidebar;
