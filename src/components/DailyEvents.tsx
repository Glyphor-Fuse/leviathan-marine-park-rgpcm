
import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    time: "09:00 AM",
    title: "Reef Awakening",
    location: "Surface Lagoon",
    type: "Feeding",
    description: "Watch the tropical reef come alive as divers feed the morning rays."
  },
  {
    time: "11:30 AM",
    title: "Shark Talk",
    location: "Twilight Tunnel",
    type: "Education",
    description: "Marine biologists explain the hunting behaviors of our resident hammerheads."
  },
  {
    time: "02:00 PM",
    title: "The Descent",
    location: "Abyss Theater",
    type: "Show",
    description: "An immersive projection show detailing the history of deep sea exploration."
  },
  {
    time: "04:30 PM",
    title: "Penguin Parade",
    location: "Ice Coast",
    type: "Interactive",
    description: "Meet our Gentoo penguins up close in their icy habitat."
  }
];

export function DailyEvents() {
  return (
    <section className="bg-background-950 px-6 py-24 text-foreground-50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">Daily Schedule</h2>
            <p className="mt-2 text-foreground-400">Plan your visit around our live feedings and shows.</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-border-900/50 bg-background-950/20 px-4 py-2 text-foreground-400">
            <Calendar className="h-5 w-5" />
            <span className="font-medium">Today's Hours: 08:00 - 20:00</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {events.map((event, index) => (
            <Card key={index} className="border-border-800 bg-background-900/50 text-foreground-200 backdrop-blur-sm transition-all hover:border-border-500/50 hover:bg-background-900">
              <CardHeader>
                <Badge variant="outline" className="w-fit border-border-800 text-foreground-400">
                  {event.type}
                </Badge>
                <div className="flex items-center gap-2 pt-2 text-2xl font-bold text-foreground">
                  <Clock className="h-5 w-5 text-foreground-500" />
                  {event.time}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2 text-xl text-foreground">{event.title}</CardTitle>
                <div className="mb-4 flex items-center gap-2 text-sm text-foreground-400">
                  <MapPin className="h-4 w-4" />
                  {event.location}
                </div>
                <CardDescription className="text-foreground-400">
                  {event.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DailyEvents;
