new TypeIt(".asyncExec", {
   speed: 80,
   waitUntilVisible: true,
 })
   .type("Nosso proposito", { delay: 300 })
   .move(-4)
   .delete(1)
   .type("ó")
   .move(null, { to: "END" })
   .type("... 🐕")
   .pause(800)
   .delete(1)
   .pause(1000)
   .type("🐕🐩🏠", {delay: 300})
   .go();