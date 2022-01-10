import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      title="A first meetup"
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Claw_Fountain_at_Stanford_Univerisity.JPG/1280px-Claw_Fountain_at_Stanford_Univerisity.JPG"
      address="Standford 5, 12345 California"
      description="This is our first meetup."
    />
  );
}

export async function getStaticPaths() {
  /* Defining Dynamic parameter value */
  return {
    fallback: false,
    paths: [
      { params: { meetupId: "m1" } },
      { params: { meetupId: "m2" } },
      { params: { meetupId: "m3" } },
    ],
  };
}
export async function getStaticProps(context) {
  /* Fetch data from API */
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        title: "A first meetup",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Claw_Fountain_at_Stanford_Univerisity.JPG/1280px-Claw_Fountain_at_Stanford_Univerisity.JPG",
        address: "Standford 5, 12345 California",
        description: "This is our first meetup.",
      },
    },
    revalidate: 1,
  };
}
export default MeetupDetails;
