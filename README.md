### What is the use of the keyof keyword in TypeScript?

1. keyof:

    1. TypeScript–এ keyof হলো এমন একটি শক্তিশালী কীওয়ার্ড, যা কোনো object বা interface-এর সবগুলো property নামকে একটি union type হিসেবে প্রদান করে।

    2. এটি মূলত object-এর valid key গুলো নির্ধারণ করতে সাহায্য করে। 

    3. এর মাধ্যমে কোডে ভুল key ব্যবহার এড়ানো যায়, কারণ `keyof` শুধুমাত্র বৈধ key-গুলোর মধ্যেই সীমাবদ্ধ রাখে।

    4. Dynamic object handling বা generic ফাংশনের ক্ষেত্রে এই ফিচার কোডকে আরও নিরাপদ ও স্মার্ট করে তোলে।

    Example:

    ```ts
        type User = {
                name: string;
                age: number;
                email: string;
            };
            type UserKeys = keyof User; 

            function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
            return obj[key];
            }
    ```



### Provide an example of using union and intersection types in TypeScript.

1. Union:
    TypeScript-এ Union Type হলো এমন একটি টাইপ যেখানে ভ্যারিয়েবল একাধিক টাইপের যেকোনো একটি গ্রহণ করতে পারে। উদাহরণস্বরূপ, string | number মানে 

    ভ্যারিয়েবলটি string বা number হতে পারে।

    Example:
    ```ts
        type UserRole="admin"|"user";

        const getDashboard=(role:UserRole)=>{
            if(role==="admin")
            {
                return "Admin Dashboard"
            }
            else if(role==="user")
            {
                return "User Dashboard"
            }
            else 
            {
                return "guest Dashboard"
            }
        }
    ```

1. Intersection:

    1. Intersection Type হলো TypeScript-এ এমন একটি টাইপ যা দুটি বা তার বেশি টাইপকে একত্রিত করে।

    2. মানে, এই টাইপের object-এ সমস্ত parent টাইপের সব প্রপার্টি থাকা বাধ্যতামূলক।

    3. যদি, Employee & Manager টাইপের object-এ Employee এবং Manager উভয় প্রপার্টি থাকতে হবে।

    4. এটি ব্যবহার করলে কোড আরও comprehensive এবং type-safe হয়।

    5. Intersection Type মূলত বড় এবং জটিল object তৈরি করার সময় খুবই উপকারী। একই সঙ্গে এটি generic বা reusable type design-এও সাহায্য করে।

    Example:
    
    ```ts
        type Employee = {
            id: string;
            name: string;
            phone: string;
        };

        type Manager = {
            designation: string;
            teamSize: number;
        };

        type EmployeeManager = Employee & Manager;
    ```


