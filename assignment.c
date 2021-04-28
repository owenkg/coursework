#include<stdio.h>

int addInt(int a, int b);
float addFloat(float a, float b);
int subInt(int a, int b);
float subFloat(float a, float b);
int mulInt(int a, int b);
float mulFloat(float a,float b);
float divInt(int a, int b);
float divFloat(float a,float b);
int formtype();
int typ;

int main() {

    int dp, opt, val1, val2;
    float val3, val4;

    printf("\n");
    printf("C-Lang 2-Digit Calculator\n");
    printf("\n");
    printf("Available operations\n");
    printf("1. Add\n");
    printf("2. Subtract\n");
    printf("3. Multiply\n");
    printf("4. Divide\n");
    printf("\n");
    printf("Available types:\n");
    printf("1. Integer\n");
    printf("2. Floating Point\n");
    printf("\n");
    
    formtype();

    printf("\n");

    if (typ == 1) {
        printf("Input two values\n");
        printf("1st Value : ");
        scanf("%d", &val1);
        printf("2nd Value : ");
        scanf("%d", &val2);
    }
    else if (typ == 2) {
        printf("Input two values\n");
        printf("1st Value : ");
        scanf("%f", &val3);
        printf("2nd Value : ");
        scanf("%f", &val4);
    }
    else {
        printf("Invalid Option! Please Choose 1 or 2 :");
        scanf("%d",&typ);
    }
    
    printf("\n");
    printf("Choose Operation: ");
    scanf("%d",&opt);
    printf("\n");
    printf("Choose precision level (no. of decimal places): ");
    scanf("%d",&dp);
    printf("\n");

    if (typ == 2) {
        switch (opt){
        case 1: {
            float sum = addFloat(val3, val4);
            printf("The sum of %f and %f  is %f ", val3, val4, sum);
        } break;
        case 2: {
            float diff = subFloat(val3, val4);
            printf("The difference between %f and %f  is %f ", val3, val4, diff);
        } break;
        case 3: {
            float prod = mulFloat(val3, val4);
            printf("The product of %f and %f  is %f ", val3, val4, prod);
        } break;
        case 4: {
            float div = divFloat(val3, val4);
            printf("The result of dividing %f by %f  is %f ", val3, val4, div);
        } break;
        default: {
            printf("One or both inputs are not floating point values!");
            //main();
        } break;
        }
    }
    else {
        switch (opt){
        case 1: {
            int sum = addInt(val1, val2);
            printf("The sum of %d and %d  is %d ", val1, val2, sum);
        } break;
        case 2: {
            int diff = subInt(val1, val2);
            printf("The difference between %d and %d  is %d ", val1, val2, diff);
        } break;
        case 3: {
            int prod = mulInt(val1, val2);
            printf("The product of %d and %d  is %d ", val1, val2, prod);
        } break;
        case 4: {
            float div = divInt(val1, val2);
            printf("The result of dividing %d by %d  is %f ", val1, val2, div);
        } break;
        default: {
            printf("One or both inputs are not integers!");
            main();
        } break;
    }
    }

    
    //printf("%f, %f, %d, %d, %d \n",val1, val2, opt, dp, typ);
    return 0;
}

int addInt(int a, int b) {
    return (a + b);
}

float addFloat(float a, float b) {
    return (a + b);
}

int subInt(int a, int b) {
    return (a - b);
}

float subFloat(float a, float b) {
    return (a - b);
}

int mulInt(int a, int b) {
    return (a * b);
}

float mulFloat(float a, float b) {
    return (a * b);
}

float divInt(int a, int b) {
    float ans = ( (float) a /(float) b );
    return ans;
}

float divFloat(float a, float b) {
    return (a / b);
}

int formtype() {
    int number;
    printf("Select Data Type: ");
    scanf("%d",&number);
    if(number > 2) {
        printf("\nIncorrect Selection!\n");
        formtype();
    }
    else if(number < 1) {
        printf("\nIncorrect Selection!\n");
        formtype();
    }
    else {
        typ = number;
    }
    return 0;
}