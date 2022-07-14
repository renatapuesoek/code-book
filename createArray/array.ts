const friends = ["Rachel", "Monica", "Phoebe"];

friends.push("Joey");
friends.push("Ross");
friends.push("Chandler");

friends.pop();

friends.filter((friend) => friend.charAt(0) !== "J");
