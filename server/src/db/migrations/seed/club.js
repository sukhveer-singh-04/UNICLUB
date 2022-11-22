const Club = require("../../models/Club");

const clearClubCollection = () => {
  console.log('Club Collection is cleaned up!');
  return Club.deleteMany({})
}

const seedClubs = () => {
  const clubs = [
    {
      name: 'codingclub',
      displayName: 'Coding Club',
      description: 'The Coding Club',
      imageURL: 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg',
      president: 'user1@gmail.com'
    },
    {
      name: 'sportsclub',
      displayName: 'Sports Club',
      description: 'The Sports Club',
      imageURL: 'https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=2000',
      president: 'user2@gmail.com'
    },
    {
      name: 'culturalclub',
      displayName: 'Cultural Club',
      description: 'The Cultural Club',
      imageURL: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      president: 'user3@gmail.com'
    },
    {
      name: 'personalityclub',
      displayName: 'Personality Club',
      description: 'The Personality Club',
      imageURL: 'https://images.unsplash.com/photo-1618590067824-5ba32ca76ce9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29uYWxpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      president: 'user4@gmail.com'
    },
    {
      name: 'editorialclub',
      displayName: 'Editorial Club',
      description: 'The Personality Club',
      imageURL: 'https://images.nightcafe.studio//assets/colourful-cubist-parrot.png?tr=w-1200,c-at_max',
      president: 'user5@gmail.com'
    },
    {
      name: 'facultyclub',
      displayName: 'Faculty Club',
      description: 'The Faculty Club',
      imageURL: 'https://images.unsplash.com/photo-1519124040388-0c8421105fe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc29yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      president: 'user6@gmail.com'
    },
    {
      name: 'ecell',
      displayName: 'Entrepreneurship Cell',
      description: 'The Entrepreneurship Cell',
      imageURL: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-97944,resizemode-1,msid-92295025/small-biz/entrepreneurship/how-entrepreneurship-cells-in-colleges-can-create-studentpreneurs-in-india.jpg',
      president: 'user7@gmail.com'
    },
    {
      name: 'tpcell',
      displayName: 'Training and Placement Cell',
      description: 'The Training and Placement Cell',
      imageURL: 'https://www.igecsagar.ac.in/images/Departments_picture/Picture1.png',
      president: 'user8@gmail.com'
    },
  ];

  return Club.insertMany(clubs)
    .then(data => console.log('Seeded Club model with required data successfully!'))
    .catch(err => console.log(err))
}

module.exports = { clearClubCollection, seedClubs };