import { redirect } from "next/navigation";

// The deliverable of this session is the React Native + Expo app in
// /positive-mindset. This Next.js shell only hosts a browser build of that
// app (public/affirmations-app) so it can be previewed in the panel.
export default function Home() {
  redirect("/affirmations-app/");
}
