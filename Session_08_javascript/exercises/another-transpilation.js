// import java.util.ArrayList;
// import java.util.Arrays;

// public class Main {

//     public static void main(String[] args) {
//         String studentName = "Troels";
//         ArrayList<Integer> grades = new ArrayList<>(Arrays.asList(85, 90, 78, 92, 88));
//         calculateGrade(studentName, grades);
//     }

//     public static void calculateGrade(String name, ArrayList<Integer> grades) {
//         int sum = 0;
//         for (int i = 0; i < grades.size(); i++) {
//             sum += grades.get(i);
//         }

//         double average = sum / (double) grades.size();

//         if (average >= 90) {
//             System.out.println(name + " has an A average.");
//         } else if (average >= 80) {
//             System.out.println(name + " has a B average.");
//         } else {
//             System.out.println(name + " needs improvement.");
//         }
//     }
// }

let studentName = "Troels"
let grades = [85, 90, 78, 92, 88]
calculateGrade(studentName, grades)

function calculateGrade(name, grades){
    let sum = 0
    for(let i = 0; i < grades.length; i++){
        sum += grades[i]
    }

    let average = sum / grades.length

    if(average >= 90)
        console.log(name + " has an A average")
    else if(average >= 80)
        console.log(name + " has a B average")
    else
        console.log(name + " needs improvement.")
}