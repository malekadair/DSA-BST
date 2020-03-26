const BinarySearchTree = require("./binarySearchTree");

const BST = new BinarySearchTree();

BST.insert(3, 3);
BST.insert(1, 1);
BST.insert(4, 4);
BST.insert(6, 6);
BST.insert(9, 9);
BST.insert(2, 2);
BST.insert(5, 5);
BST.insert(7, 7);

const tree = t => {
	if (!t) {
		return 0;
	}
	return tree(t.left) + t.value + tree(t.right);
};
console.log(tree(BST));

const bstHeight = (t, counter = 0) => {
	if (!t) {
		return 0;
	}

	counter++;
	let leftCounter = counter;
	let rightCounter = counter;

	if (t.left) {
		leftCounter = bstHeight(t.left, counter);
	}
	if (t.right) {
		rightCounter = bstHeight(t.right, counter);
	}
	return Math.max(leftCounter, rightCounter);
};

console.log("height", bstHeight(BST));

const isBST = BST => {

};


function height(tree) { return Math.max(tree.left && height(tree.left), tree.right && height(tree.right)) + 1; }