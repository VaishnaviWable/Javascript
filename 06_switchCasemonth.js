function monthOfYear(month) {
    switch (month) {
        case 1:
            console.log(`Month number ${month} ===> January`)
            break;
        case 2:
            console.log(`Month number ${month} ===> Feburary`)
            break;
        case 3:
            console.log(`Month number ${month} ===> March`)
            break;
        case 4:
            console.log(`Month number ${month} ===> April`)
            break;
        case 5:
            console.log(`Month number ${month} ===> May`)
            break;
        case 6:
            console.log(`Month number ${month} ===> June`)
            break;
        case 7:
            console.log(`Month number ${month} ===> July`)
            break;
        case 8:
            console.log(`Month number ${month} ===> August`)
            break;
        case 9:
            console.log(`Month number ${month} ===> September`)
            break;
        case 10:
            console.log(`Month number ${month} ===> October`)
            break;
        case 11:
            console.log(`Month number ${month} ===> November`)
            break;
        case 12:
            console.log(`Month number ${month} ===> December`)
            break;
        



        default:
            console.log(`${month} ====>Invalid input `)
            break;
    }
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);

