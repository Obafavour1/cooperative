// enum GenderInput{
//     male,
//     female
// }


// export interface EmployerInput{
//     fullName:string
//     dateOfBirth: string
//     // gender:GenderInput
//     maritalStatus: string
//     phoneNumber:string
//     email:string
//     address: string
//     street: string
//     city: string
//     state: string
//     postalCode: string
//     nationality: string
//     identification: string
//     bvn: string

//     nextOfKin:{
//         fullName: string
//         relationship: string
//         phoneNumber: string
//         address: string
//         street: string
//         city: string
//         state: string
//     }
//     employmentInfo:{
//         employmentStatus : string
//         employerName: string
//         employerAddress: string
//         street: string
//         city : string
//         state: string 
//         monthlyIncome : string
//         jobTitle: string
//         employmentDuration: string

//     }

//     // membership details
//     membershipType
// }

// export interface InvestmentTableInput{
//     inititalInvestment: number
//     currentBalance: number
//     monthlyIntrestRate: number
//     lateFeeRate: number
//     investmentStartDate: date|string
//     nextInterestDate: date |string
// }

// CUSTOMER DETAILS

interface NextOfKin {
    fullName: string;
    relationship: string;
    phoneNumber: string;
    address: string;
    street: string;
    city: string;
    state: string;
  }
  
  interface EmploymentInfo {
    employmentStatus: string;
    employerName: string;
    employerAddress: string;
    street: string;
    city: string;
    state: string;
    monthlyIncome: number;
    jobTitle: string;
    employmentDuration: string;
  }

  enum Gender{
    Male,
    Female
  }

  enum Membership{
    Basic,
    Premium,
    VIP
  }
  
  export interface CustomerInput {
    fullName: string;
    dateOfBirth: Date | string;
    gender: Gender;
    maritalStatus: string;
    phoneNumber: string;
    email: string;
    address: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    nationality: string;
    identification: string;
    bvn: string; // Bank Verification Number

    nextOfKin: NextOfKin;
  
    employmentInfo: EmploymentInfo;
  
    membershipType: Membership;
    startDate: Date | string;
    endDate: Date | string;
    membershipID: string;
  }

//   COLLATERAL DETAILS

  export interface CollateralInput {
    userId: string;
    type: string; // e.g., Car, Property
    description?: string;
    estimatedValue?: number;
    ownershipDocument?: string;
    agreeToTerms: boolean;
  }

//   REFEREE DETAILS

  export interface RefereesInput {
    userId: string;
    fullName: string;
    relationship: string;
    contactNumber: string;
    address: string; // Document details or path to stored document
    street: string;
    city: string;
    state?: string;
  }

  // Loan table type
  interface RepaymentHistoryEntry {
    amount: number;
    date: Date;
    applied: boolean;
  }
  
  interface DefaultFeeHistoryEntry {
    dateApplied: Date;
    feeAmount: number;
    reason?: string;
    dateRemoved?: Date;
  }
  
  interface DetailedPaymentHistoryEntry {
    date: Date;
    amount: number;
    appliedToInterest: number;
    appliedToPrincipal: number;
    remainingBalanceAfterPayment: number;
  }

  enum BalanceType{
    interest,
    payment,
    defaultFee
  }
  
  interface BalanceChangeLogEntry {
    date: Date;
    type: BalanceType; // Enum-like type restriction
    amount: number;
    newOutstandingBalance: number;
  }
  
  export interface LoanInput {
    borrowerId: string; // References "User" collection
    principalAmount: number;
    outstandingBalance: number;
    interestRate: number; // Default: 0.1 (10%)
    defaultedFeeRate: number; // Default: 0.02 (2%)
    termStartDate: Date;
    nextInterestDate: Date;
    pendingPayment: number; 
    unpaidInterest: number; 
  
    // History tracking fields
    repaymentHistory: RepaymentHistoryEntry[];
    defaultFeeHistory: DefaultFeeHistoryEntry[];
    detailedPaymentHistory: DetailedPaymentHistoryEntry[];
    balanceChangeLog: BalanceChangeLogEntry[];
  
    isDefaulted: boolean;
    isActive: boolean;
    collaterals: string[]; // Array of ObjectId references to "Collateral"
    references: string[]; // Array of ObjectId references to "Reference"
    agreedToConsents: boolean;
  }

  
  // OFFLINE SAVINGS

  interface OfflineSavings {
    accountHolderId: string; // Reference to "User" collection
    amount: number;
  }

  // INVESTMENT TABLE

  interface InterestPaymentHistoryEntry {
    month: Date;
    interestAmount: number;
    claimedOn: Date;
    pending: boolean;
  }
  
  interface LateFeeHistoryEntry {
    dateApplied: Date;
    feeAmount: number;
    reason?: string;
    dateRemoved?: Date;
  }
  
  interface PaymentWithdrawalHistoryEntry {
    date: Date;
    amountWithdrawn: number;
    interestApplied: number;
    balanceAfterWithdrawal: number;
  }

  // enum BalanceType{
  //   interest,
  //   payment,
  //   defaultFee
  // }
  
  interface BalanceChangeLogEntry {
    date: Date;
    type: BalanceType // type: "interest" | "withdrawal" | "lateFee" | "adjustment"; // Define possible types as an enum-like restriction
    amount: number;
    newBalance: number;
  }
  
  export interface InvestmentInput {
    investorId: string;
    initialInvestment: number;
    currentBalance: number;
    monthlyInterestRate: number;
    lateFeeRate: number;
    investmentStartDate: Date | string;
    nextInterestDate: Date | string;
  
    // Monthly interest payouts and balance adjustments
    interestPaymentHistory: InterestPaymentHistoryEntry[];
    lateFeeHistory: LateFeeHistoryEntry[];
    paymentWithdrawalHistory: PaymentWithdrawalHistoryEntry[];
    balanceChangeLog: BalanceChangeLogEntry[];
  
    isDefaulted: boolean;
    isActive: boolean;
  }



  

  

