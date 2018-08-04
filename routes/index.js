var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/investedProjects', function(req, res, next) {
  res.json({
    projects: [
    {
      projectId: 1,
      title: 'The Oasis of Missed Connections',
      creator: 'The Gardeners',
      amountRaised: 200,
      amountToRaise: 2000,
      amountRedeemed: 100,
      timeRemaining: 2,
      noOfInvestors: 235,
      noOfProposals: 5,
      noOfSuccessfulProposals: 2,
      imgSrc: 'https://ksr-ugc.imgix.net/assets/011/811/170/3ea5ba47eeca8fb3219f9150e27e9e80_original.jpg?crop=faces&w=1552&h=873&fit=crop&v=1463698047&auto=format&q=92&s=124442907f2364220776efb9fc8f7c6c'
    },
    {
      projectId: 2,
      title: 'Indian Slide Guitar (The Kolkata Groove)',
      creator: 'Mike Brenner',
      amountRaised: 1000,
      amountToRaise: 24000,
      amountRedeemed: 100,
      timeRemaining: 200,
      noOfInvestors: 25,
      noOfProposals: 5,
      noOfSuccessfulProposals: 2,
      imgSrc: 'https://ksr-ugc.imgix.net/assets/011/292/405/feb29a47344b0496d76bcf200be06bf0_original.png?crop=faces&w=1552&h=873&fit=crop&v=1463680556&auto=format&q=92&s=c046508d1a3ba637fc318414ce54a83d'
    },
    {
      projectId: 3,
      title: 'Spyra One: The next generation of water guns.',
      creator: 'Spyra',
      amountRaised: 20,
      amountToRaise: 1000,
      amountRedeemed: 100,
      timeRemaining: 21,
      noOfInvestors: 5,
      noOfProposals: 5,
      noOfSuccessfulProposals: 2,
      imgSrc: 'https://ksr-ugc.imgix.net/assets/021/641/481/31bd417c7edc620a2e45886dbfec8f2b_original.jpg?crop=faces&w=560&h=315&fit=crop&v=1532593160&auto=format&q=92&s=30d796c0b66ef48f97f3405a7e4e8bc1'
    },
    {
      projectId: 4,
      title: 'GoCube | The Classic Puzzle Reinvented',
      creator: 'GoCube',
      amountRaised: 1980,
      amountToRaise: 1900,
      amountRedeemed: 100,
      timeRemaining: 1,
      noOfInvestors: 892,
      noOfProposals: 5,
      noOfSuccessfulProposals: 2,
      imgSrc: 'https://ksr-ugc.imgix.net/assets/021/463/146/97672225d1ba7ed9ac3ef82d7a0d748e_original.png?crop=faces&w=560&h=315&fit=crop&v=1528807728&auto=format&q=92&s=660e30bf6bb9a3123013542010e4c9e3'
    },
    {
      projectId: 5,
      title: 'Domio Pro - a game changer in helmet audio & communication',
      creator: 'Domio Sports',
      description: 'The wireless Domio Pro mounts to any helmet and transforms it into a surround sound audio and voice communication system.',
      amountRaised: 2000,
      amountToRaise: 3000,
      amountRedeemed: 100,
      timeRemaining: 20,
      noOfInvestors: 900,
      noOfProposals: 5,
      noOfSuccessfulProposals: 2,
      imgSrc: 'https://ksr-ugc.imgix.net/assets/021/482/324/2890cbcf232ab30df4dade96b48c9cf4_original.png?crop=faces&w=560&h=315&fit=crop&v=1533159189&auto=format&q=92&s=b733245e01568489d367dab023c6cbda'
    }
  ]})
})

router.get('/createdProjects', function(req, res, next) {
  res.json({
    projects: [
    {
      projectId: 2,
      title: 'Indian Slide Guitar (The Kolkata Groove)',
      creator: 'Mike Brenner',
      amountRaised: 1000,
      amountToRaise: 24000,
      amountRedeemed: 100,
      timeRemaining: 200,
      noOfInvestors: 25,
      noOfProposals: 5,
      noOfSuccessfulProposals: 2,
      imgSrc: 'https://ksr-ugc.imgix.net/assets/011/292/405/feb29a47344b0496d76bcf200be06bf0_original.png?crop=faces&w=1552&h=873&fit=crop&v=1463680556&auto=format&q=92&s=c046508d1a3ba637fc318414ce54a83d'
    },
    {
      projectId: 1,
      title: 'The Oasis of Missed Connections',
      creator: 'The Gardeners',
      amountRaised: 200,
      amountToRaise: 2000,
      amountRedeemed: 100,
      timeRemaining: 2,
      noOfInvestors: 235,
      noOfProposals: 5,
      noOfSuccessfulProposals: 2,
      imgSrc: 'https://ksr-ugc.imgix.net/assets/011/811/170/3ea5ba47eeca8fb3219f9150e27e9e80_original.jpg?crop=faces&w=1552&h=873&fit=crop&v=1463698047&auto=format&q=92&s=124442907f2364220776efb9fc8f7c6c'
    },
    {
      projectId: 3,
      title: 'Spyra One: The next generation of water guns.',
      creator: 'Spyra',
      amountRaised: 20,
      amountToRaise: 1000,
      amountRedeemed: 100,
      timeRemaining: 21,
      noOfInvestors: 5,
      noOfProposals: 5,
      noOfSuccessfulProposals: 2,
      imgSrc: 'https://ksr-ugc.imgix.net/assets/021/641/481/31bd417c7edc620a2e45886dbfec8f2b_original.jpg?crop=faces&w=560&h=315&fit=crop&v=1532593160&auto=format&q=92&s=30d796c0b66ef48f97f3405a7e4e8bc1'
    },
    {
      projectId: 3,
      title: 'GoCube | The Classic Puzzle Reinvented',
      creator: 'GoCube',
      amountRaised: 1980,
      amountToRaise: 1900,
      amountRedeemed: 100,
      timeRemaining: 1,
      noOfInvestors: 892,
      noOfProposals: 5,
      noOfSuccessfulProposals: 2,
      imgSrc: 'https://ksr-ugc.imgix.net/assets/021/463/146/97672225d1ba7ed9ac3ef82d7a0d748e_original.png?crop=faces&w=560&h=315&fit=crop&v=1528807728&auto=format&q=92&s=660e30bf6bb9a3123013542010e4c9e3'
    },
    {
      projectId: 5,
      title: 'Domio Pro - a game changer in helmet audio & communication',
      creator: 'Domio Sports',
      description: 'The wireless Domio Pro mounts to any helmet and transforms it into a surround sound audio and voice communication system.',
      amountRaised: 2000,
      amountToRaise: 3000,
      amountRedeemed: 100,
      timeRemaining: 20,
      noOfInvestors: 900,
      noOfProposals: 5,
      noOfSuccessfulProposals: 2,
      imgSrc: 'https://ksr-ugc.imgix.net/assets/021/482/324/2890cbcf232ab30df4dade96b48c9cf4_original.png?crop=faces&w=560&h=315&fit=crop&v=1533159189&auto=format&q=92&s=b733245e01568489d367dab023c6cbda'
    }
  ]})
})

router.get('/projects', function(req, res, next) {
  res.json({
    projects: [
    {
      projectId: 2,
      title: 'Indian Slide Guitar (The Kolkata Groove)',
      creator: 'Mike Brenner',
      amountRaised: 1000,
      amountToRaise: 24000,
      timeRemaining: 200,
      noOfInvestors: 25,
      imgSrc: 'https://ksr-ugc.imgix.net/assets/011/292/405/feb29a47344b0496d76bcf200be06bf0_original.png?crop=faces&w=1552&h=873&fit=crop&v=1463680556&auto=format&q=92&s=c046508d1a3ba637fc318414ce54a83d'
    },
    {
      projectId: 1,
      title: 'The Oasis of Missed Connections',
      creator: 'The Gardeners',
      amountRaised: 200,
      amountToRaise: 2000,
      timeRemaining: 2,
      noOfInvestors: 235,
      imgSrc: 'https://ksr-ugc.imgix.net/assets/011/811/170/3ea5ba47eeca8fb3219f9150e27e9e80_original.jpg?crop=faces&w=1552&h=873&fit=crop&v=1463698047&auto=format&q=92&s=124442907f2364220776efb9fc8f7c6c'
    },
    {
      projectId: 3,
      title: 'Spyra One: The next generation of water guns.',
      creator: 'Spyra',
      amountRaised: 20,
      amountToRaise: 1000,
      timeRemaining: 21,
      noOfInvestors: 5,
      imgSrc: 'https://ksr-ugc.imgix.net/assets/021/641/481/31bd417c7edc620a2e45886dbfec8f2b_original.jpg?crop=faces&w=560&h=315&fit=crop&v=1532593160&auto=format&q=92&s=30d796c0b66ef48f97f3405a7e4e8bc1'
    },
    {
      projectId: 3,
      title: 'GoCube | The Classic Puzzle Reinvented',
      creator: 'GoCube',
      amountRaised: 1980,
      amountToRaise: 1900,
      timeRemaining: 1,
      noOfInvestors: 892,
      imgSrc: 'https://ksr-ugc.imgix.net/assets/021/463/146/97672225d1ba7ed9ac3ef82d7a0d748e_original.png?crop=faces&w=560&h=315&fit=crop&v=1528807728&auto=format&q=92&s=660e30bf6bb9a3123013542010e4c9e3'
    },
    {
      projectId: 5,
      title: 'Domio Pro - a game changer in helmet audio & communication',
      creator: 'Domio Sports',
      description: 'The wireless Domio Pro mounts to any helmet and transforms it into a surround sound audio and voice communication system.',
      amountRaised: 2000,
      amountToRaise: 3000,
      timeRemaining: 20,
      noOfInvestors: 900,
      imgSrc: 'https://ksr-ugc.imgix.net/assets/021/482/324/2890cbcf232ab30df4dade96b48c9cf4_original.png?crop=faces&w=560&h=315&fit=crop&v=1533159189&auto=format&q=92&s=b733245e01568489d367dab023c6cbda'
    }
  ]})
})

router.get('/getUserSummary', function(req, res, next) {
  res.json({
    investedProjectsData: {
      completed: 12,
      closed: 14,
      withOpenProposals: 5
    },
    createdProjectsData: {
      completed: 4,
      closed: 1,
      withOpenProposals: 3
    },
    proposalsData: {
      created: 12,
      approved: 4,
      rejected: 5,
      pending: 2,
      totalVoted: 6	
    }
  })
})

var projectsMap = {
  1: {
    id: 1,
    title: 'The Oasis of Missed Connections',
    creator: {
      name: 'The Gardeners',
      imgSrc: 'https://ksr-ugc.imgix.net/assets/006/141/714/b2ca0c38f6ef6a9592eda6d6f76000b8_original.jpg?w=220&h=220&fit=crop&v=1461369200&auto=format&q=92&s=a355c612b630e05ea857f032db467e35',
      totalProjects: 2
    },
    description: 'A tree of light to provide shelter in the desert, fun in the sun, a beacon in the night, and a home for the Book of Missed Connections.',
    amountRaised: 200,
    amountToRaise: 2000,
    timeReamaining: 2,
    noOfInvestors: 235,
    imgSrc: 'https://ksr-ugc.imgix.net/assets/011/811/170/3ea5ba47eeca8fb3219f9150e27e9e80_original.jpg?crop=faces&w=1552&h=873&fit=crop&v=1463698047&auto=format&q=92&s=124442907f2364220776efb9fc8f7c6c',
    proposals: [
      {
        id: 13,
        name: 'Proposal 1',
        isSuccess: true,
        description: 'This is description of proposal 1',
        isOpen: false,
        hasVoted: true,
        percentageVoted: 80
      },
      {
        id: 14,
        name: 'Proposal 2',
        isSuccess: false,
        description: 'This is description of proposal 2',
        isOpen: false,
        hasVoted: false,
        percentageVoted: 20
      },
      {
        id: 15,
        name: 'Proposal 3',
        isSuccess: false,
        description: 'This is description of proposal 3',
        isOpen: true,
        hasVoted: true,
        percentageVoted: 40
      },
      {
        id: 16,
        name: 'Proposal 4',
        isSuccess: false,
        description: 'This is description of proposal 4',
        isOpen: true,
        hasVoted: false,
        percentageVoted: 30
      }
    ]
  },
  2: {
    id: 2,
    title: 'Indian Slide Guitar (The Kolkata Groove)',
    creator: {
      name: 'Mike Brenner',
      imgSrc: 'https://ksr-ugc.imgix.net/assets/006/099/720/242a0fcaf5eb1c0d3b970d5753ef98d0_original.jpg?w=220&h=220&fit=crop&v=1461366493&auto=format&q=92&s=aa6d698dd29511cf88fa4d6a00093519',
      totalProjects: 2
    },
    description: 'This project sends me to Kolkata, India to study & record with Indian musicians, in search of the ultimate Indian slide guitar groove.',
    amountRaised: 1000,
    amountToRaise: 24000,
    timeReamaining: 200,
    noOfInvestors: 25,
    imgSrc: 'https://ksr-ugc.imgix.net/assets/011/292/405/feb29a47344b0496d76bcf200be06bf0_original.png?crop=faces&w=1552&h=873&fit=crop&v=1463680556&auto=format&q=92&s=c046508d1a3ba637fc318414ce54a83d',
    proposals: [
      {
        id: 13,
        name: 'Proposal 1',
        isSuccess: true,
        description: 'This is description of proposal 1',
        isOpen: false,
        hasVoted: true,
        percentageVoted: 80
      },
      {
        id: 14,
        name: 'Proposal 2',
        isSuccess: false,
        description: 'This is description of proposal 2',
        isOpen: false,
        hasVoted: false,
        percentageVoted: 20
      },
      {
        id: 15,
        name: 'Proposal 3',
        isSuccess: false,
        description: 'This is description of proposal 3',
        isOpen: true,
        hasVoted: true,
        percentageVoted: 40
      },
      {
        id: 16,
        name: 'Proposal 4',
        isSuccess: false,
        description: 'This is description of proposal 4',
        isOpen: true,
        hasVoted: false,
        percentageVoted: 30
      }
    ]
  },
  3: {
    id: 3,
    title: 'Spyra One: The next generation of water guns.',
    creator: {
      name: 'Spyra',
      imgSrc: 'https://ksr-ugc.imgix.net/assets/016/928/337/a07e8d7f66c63ab827ac0a4c5924a908_original.png?w=160&h=160&fit=crop&v=1529409762&auto=format&q=92&s=6ecc94f104f5345f14ae7d5ed3dfee63',
      totalProjects: 2
    },
    description: 'Clear hits, auto-refill, constant pressure: Spyra One takes water fights to the next level.',
    amountRaised: 20,
    amountToRaise: 1000,
    timeReamaining: 21,
    noOfInvestors: 5,
    imgSrc: 'https://ksr-ugc.imgix.net/assets/021/641/481/31bd417c7edc620a2e45886dbfec8f2b_original.jpg?crop=faces&w=560&h=315&fit=crop&v=1532593160&auto=format&q=92&s=30d796c0b66ef48f97f3405a7e4e8bc1',
    proposals: [
      {
        id: 13,
        name: 'Proposal 1',
        isSuccess: true,
        description: 'This is description of proposal 1',
        isOpen: false,
        hasVoted: true,
        percentageVoted: 80
      },
      {
        id: 14,
        name: 'Proposal 2',
        isSuccess: false,
        description: 'This is description of proposal 2',
        isOpen: false,
        hasVoted: false,
        percentageVoted: 20
      },
      {
        id: 15,
        name: 'Proposal 3',
        isSuccess: false,
        description: 'This is description of proposal 3',
        isOpen: true,
        hasVoted: true,
        percentageVoted: 40
      },
      {
        id: 16,
        name: 'Proposal 4',
        isSuccess: false,
        description: 'This is description of proposal 4',
        isOpen: true,
        hasVoted: false,
        percentageVoted: 30
      }
    ]
  },
  4: {
    id: 4,
    title: 'GoCube | The Classic Puzzle Reinvented',
    creator: {
      name: 'GoCube',
      imgSrc: 'https://ksr-ugc.imgix.net/assets/021/463/278/0cabf08cb801c4096616b9af75a317cb_original.png?w=220&h=220&fit=crop&v=1528124463&auto=format&q=92&s=1e7cb0ee35ae276cd8a1b1f65c1a9c3b',
      totalProjects: 2
    },
    description: 'An incredible smart connected cube with tracking and whole new way to cube. Learn, improve, and even compete.',
    amountRaised: 1980,
    amountToRaise: 1900,
    timeReamaining: 1,
    noOfInvestors: 892,
    imgSrc: 'https://ksr-ugc.imgix.net/assets/021/463/146/97672225d1ba7ed9ac3ef82d7a0d748e_original.png?crop=faces&w=560&h=315&fit=crop&v=1528807728&auto=format&q=92&s=660e30bf6bb9a3123013542010e4c9e3',
    proposals: [
      {
        id: 13,
        name: 'Proposal 1',
        isSuccess: true,
        description: 'This is description of proposal 1',
        isOpen: false,
        hasVoted: true,
        percentageVoted: 80
      },
      {
        id: 14,
        name: 'Proposal 2',
        isSuccess: false,
        description: 'This is description of proposal 2',
        isOpen: false,
        hasVoted: false,
        percentageVoted: 20
      },
      {
        id: 15,
        name: 'Proposal 3',
        isSuccess: false,
        description: 'This is description of proposal 3',
        isOpen: true,
        hasVoted: true,
        percentageVoted: 40
      },
      {
        id: 16,
        name: 'Proposal 4',
        isSuccess: false,
        description: 'This is description of proposal 4',
        isOpen: true,
        hasVoted: false,
        percentageVoted: 30
      }
    ]
  },
  5: {
    id: 5,
    title: 'Domio Pro - a game changer in helmet audio & communication',
    creator: {
      name: 'Domio Sports',
      imgSrc: 'https://ksr-ugc.imgix.net/assets/021/548/160/fb4b4dab0764795573e9cb1b6af78a68_original.jpg?w=220&h=220&fit=crop&v=1528766255&auto=format&q=92&s=db8785547b1fc6adce829991a525b430',
      totalProjects: 2
    },
    description: 'The wireless Domio Pro mounts to any helmet and transforms it into a surround sound audio and voice communication system.',
    amountRaised: 2000,
    amountToRaise: 3000,
    timeReamaining: 20,
    noOfInvestors: 900,
    imgSrc: 'https://ksr-ugc.imgix.net/assets/021/482/324/2890cbcf232ab30df4dade96b48c9cf4_original.png?crop=faces&w=560&h=315&fit=crop&v=1533159189&auto=format&q=92&s=b733245e01568489d367dab023c6cbda',
    proposals: [
      {
        id: 13,
        name: 'Proposal 1',
        isSuccess: true,
        description: 'This is description of proposal 1',
        isOpen: false,
        hasVoted: true,
        percentageVoted: 80
      },
      {
        id: 14,
        name: 'Proposal 2',
        isSuccess: false,
        description: 'This is description of proposal 2',
        isOpen: false,
        hasVoted: false,
        percentageVoted: 20
      },
      {
        id: 15,
        name: 'Proposal 3',
        isSuccess: false,
        description: 'This is description of proposal 3',
        isOpen: true,
        hasVoted: true,
        percentageVoted: 40
      },
      {
        id: 16,
        name: 'Proposal 4',
        isSuccess: false,
        description: 'This is description of proposal 4',
        isOpen: true,
        hasVoted: false,
        percentageVoted: 30
      }
    ]
  }
}

router.get('/investor/:projectId', function(req, res, next) {
  res.json({project: projectsMap[req.params.projectId]})
})

module.exports = router;
