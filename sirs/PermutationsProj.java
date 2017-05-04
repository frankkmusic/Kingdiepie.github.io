import java.util.Arrays;

public class PermutationsProj {
	private static long permutations = 0;

	// YOUR CODE GOES HERE .. declare instance variables when needed

	public static void main(String[] args) {
		int[] digits = { 1, 2, 3 };
		// int[] digits = { 1, 2, 3, 4, 5, 6};
		int n = digits.length;
		long curTime = System.currentTimeMillis();

		PermutationsProj perm = new PermutationsProj();
		perm.permute(digits, 0, n - 1);

		System.out.println("\nNote: " + digits.length + "! = " + factorial(digits.length)
		    + "\nnumber of permutations processed: " + permutations);
		double elapsedTime = (System.currentTimeMillis() - curTime) / 1000.0;
		System.out.println("It took " + elapsedTime + " seconds\n");

		// YOUR CODE GOES HERE .. print results to exercises (see below)

	}

	// recursive method to permute the values in digits
	public void permute(int[] digits, int start, int end) {

		// YOUR CODE GOES HERE ..

		// base case
		// since the start parameter will increase by one each recursive call...
		// simply check if start equals end then invoke the process method

		// recursive case
		// loop from start to end inclusive thru digits (loop variable i)
		// (1) let digits get the array returned from swap..
		// ....using digits, start and i as arguments
		// (2) invoke the permute method with the updated digits
		// ....and start+1 and end as arguments
		// (3) copy step (1) .. which will swap the elements back

	}

	// simply output the array
	public void process(int[] digits) {
		System.out.println(Arrays.toString(digits));

		// YOUR CODE GOESE HERE .. modify for exercises (see below)

		permutations++;
	}

	// utility method to swap elements in digits array at indices i and j
	public int[] swap(int[] digits, int i, int j) {
		int temp;
		int[] result = Arrays.copyOf(digits, digits.length);
		// the copy is necessary for the recursive algorithm

		// YOUR CODE GOES HERE ..

		// write the three lines of code necessary to swap values in array result

		return result;
	}

	// simple factorial method to verify the number of permutations processed
	public static int factorial(int n) {
		int prod = 1;

		// YOUR CODE GOES HERE ..

		return prod;
	}
}

// exercise 1

// modify the digits array in the main to be the first six natural numbers
// int[] digits = { 1, 2, 3, 4, 5, 6 };
// create any necessary instance variables and
// modify the process method to do the following:

// print each array where the
// sum of the first three elements is equal to the sum of the last three
// .. also print a count of how many permutations were printed

// exercise 2

// lets define a hill-climb score for each array as the sum of the
// amounts traveled from each element to the next climbing thru the array
// example: { 2,5,3,1,6,4 } ... 2 to 5 is 3, 5 to 3 is -2, 3 to 1 is -2, etc.
// therefore 3-2-2+5-2 is a hill-climb score of 2.

// count how many permutations have a
// negative, positive and zero hill-climb score
// and print them as a percentage
