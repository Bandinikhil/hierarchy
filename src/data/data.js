const data = {
  "CEO": {
    "position": "CEO",
    "name": "Ramesh Kumar",
    "id": "CEO123",
    "phone": "123-456-7890",
    "email": "ramesh.kumar@example.com",
    "departments": {
      "Head of Staff/HR": {
        "position": "Head of Staff/HR",
        "name": "Sunita Sharma",
        "id": "HR001",
        "phone": "987-654-3210",
        "email": "sunita.sharma@example.com",
        "teams": [
          {
            "id": "HR001_T1",
            "name": "Team 1",
            "teamLeader": {
              "position": "Team Leader",
              "name": "Aruna Gupta",
              "id": "TL001",
              "phone": "555-555-5555",
              "email": "aruna.gupta@example.com",
              "teamMembers": [
                {
                  "position": "Team Member",
                  "name": "Manish Singh",
                  "id": "TM001",
                  "phone": "444-444-4444",
                  "email": "manish.singh@example.com"
                },
                {
                  "position": "Team Member",
                  "name": "Nagraj",
                  "id": "TM002",
                  "phone": "444-444-5555",
                  "email": "nagraj@example.com"
                },
              ]
            }
          },
          {
            "id": "HR001_T2",
            "name": "Team 2",
            "teamLeader": {
              "position": "Team Leader",
              "name": "Suresh Patel",
              "id": "TL002",
              "phone": "666-666-6666",
              "email": "suresh.patel@example.com",
              "teamMembers": [
                {
                  "position": "Team Member",
                  "name": "Rajesh Khanna",
                  "id": "TM002",
                  "phone": "777-777-7777",
                  "email": "rajesh.khanna@example.com"
                }
              ]
            }
          }
        ]
      },
      "Head of Engineering": {
        "position": "Head of Engineering",
        "name": "Vijay Singh",
        "id": "ENG001",
        "phone": "222-222-2222",
        "email": "vijay.singh@example.com",
        "teams": [
          {
            "id": "ENG001_T1",
            "name": "Team",
            "teamLeader": {
              "position": "Team Leader",
              "name": "Prakash Sharma",
              "id": "TL003",
              "phone": "888-888-8888",
              "email": "prakash.sharma@example.com",
              "teamMembers": [
                {
                  "position": "Team Member",
                  "name": "Preeti Singh",
                  "id": "TM003",
                  "phone": "999-999-9999",
                  "email": "preeti.singh@example.com"
                }
              ]
            }
          }
        ]
      },
      "Head of Design": {
        "position": "Head of Design",
        "name": "Anjali Gupta",
        "id": "DES001",
        "phone": "333-333-3333",
        "email": "anjali.gupta@example.com",
        "teams": [
          {
            "id": "DES001_T1",
            "name": "Team",
            "teamLeader": {
              "position": "Team Leader",
              "name": "Neha Patel",
              "id": "TL004",
              "phone": "111-111-1111",
              "email": "neha.patel@example.com",
              "teamMembers": [
                {
                  "position": "Team Member",
                  "name": "Rajiv Kumar",
                  "id": "TM004",
                  "phone": "123-123-1234",
                  "email": "rajiv.kumar@example.com"
                }
              ]
            }
          }
        ]
      }
    }
  }
};

export default data;