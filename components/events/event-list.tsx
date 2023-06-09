import EventItem from "./event-item";
import { eventsDataType } from "./events-type";

import classes from "./event-list.module.css";

export default function EventList(props: { items: eventsDataType[] }) {
  const { items } = props;

  console.log("items", items);
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
          description={""}
          isFeatured={false}
        />
      ))}
    </ul>
  );
}
