export class Sport {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  static createMockedSports() {
    return [
      new Sport(
        "Cycling",
        'Cycling, also called bicycling or biking, is the use of bicycles for transport, recreation, exercise or sport. People engaged in cycling are referred to as "cyclists", "bicyclists", or "bikers". Apart from two-wheeled bicycles, "cycling" also includes the riding of unicycles, tricycles, quadricycles, recumbent and similar human-powered vehicles (HPVs).'
      ),
      new Sport(
        "Cricket",
        'Cricket is one of many games in the "club ball" sphere that basically involve hitting a ball with a hand-held implement; others include baseball (which shares many similarities with cricket, both belonging in the more specific bat-and-ball games category.'
      ),
      new Sport(
        "Swimming",
        "Swimming is the self-propulsion of a person through water, or other liquid, usually for recreation, sport, exercise, or survival. Locomotion is achieved through coordinated movement of the limbs and the body to achieve hydrodynamic thrust that results in directional motion. Humans can hold their breath underwater and undertake rudimentary locomotive swimming within weeks of birth, as a survival response."
      ),
      new Sport(
        "Baseball",
        "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher, throws a ball that a player on the batting team, called the batter, tries to hit with a bat."
      ),
      // ... other sports
      new Sport(
        "Volleyball",
        "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules."
      ),
    ];
  }
}
