var Family = {};

Family.Peter = {};
Family.Peter.FirstName = "Peter";
Family.Peter.LastName = "Griffith";
Family.Peter.Age = "41";

Family.Lois = {};
Family.Lois.FirstName = "Lois";
Family.Lois.LastName = "Pewterschmidt";
Family.Lois.Age = "40";

Family.Meg = {};
Family.Meg.FirstName = "Meg";
Family.Meg.LastName = "Griffth";
Family.Meg.Age = "18";

Family.Chris = {};
Family.Chris.FirstName = "Chris";
Family.Chris.LastName = "Griffth";
Family.Chris.Age = "16";

Family.Stewie = {};
Family.Stewie.FirstName = "Stewie";
Family.Stewie.LastName = "Griffth";
Family.Stewie.Age = "1";

Family.Brian = {};
Family.Brian.FirstName = "Brian";
Family.Brian.LastName = "Griffth";
Family.Brian.Age = "7";


Family.Person = function(firstName, lastName, age)
{
	this.FirstName = firstName;
	this.LastName = lastName;
	this.Age = age;
}


Family.Peter = new Family.Person("Peter", "Griffth", 41);
Family.Lois = new Family.Person("Lois", "Griffth", 40);
Family.Meg = new Family.Person("Meg", "Griffth", 18);
Family.Chris = new Family.Person("Chris", "Griffth", 16);
Family.Stewie = new Family.Person("Stewie", "Griffth", 1);
Family.Brian = new Family.Person("Brian", "Griffth", 7);


Family.Person.prototype.GetFullName = function()
{
	return this.FirstName + " " + this.LastName + " " + this.Age;
}


document.getElementByName("Peter").innerhtml = Family();



