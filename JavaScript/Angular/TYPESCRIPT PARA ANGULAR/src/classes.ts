//classes

/**
 * data modifiers  
   public
   private
   protected
 */
   class Character {
    private name?: string;
     stregth: number;
     skill: number;
 
     constructor(name: string, stregth: number, skill: number ) {
         this.name = name;
         this.stregth = stregth;
         this.skill = skill;
     }
 
     attack(): void {
         console.log(`Attack with ${this.stregth} points`)
     }
 }
 //Character: classe pai ou superclass
 //Magician: classe filha ou subclass
 class Magician extends Character{
     magicPoints: number;
     constructor(name: string, stregth: number, skill: number, magicPoints: number ) {
         super(name, stregth, skill);
         this.magicPoints = magicPoints;
 
     }
 }
 const p1 = new Character( "Silvio Santos", 70, 130)
 const p2 = new Magician("Mr. M", 40, 150, 100)
     console.log(p1)
     console.log(p2)