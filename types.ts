
export interface BaseEntry {
  id: string;
  [key: string]: any;
}

export type FormField = {
  name: keyof BaseEntry;
  label: string;
  type: 'text' | 'date' | 'textarea' | 'number' | 'time' | 'select';
  placeholder?: string;
  options?: string[];
};

// IRCA Types
export interface IrcaReferralOut extends BaseEntry {
  date: string;
  name: string;
  clientRegnNo: string;
  referredTo: string;
  accompaniedBy: string;
  diagnosis: string;
  reasonForReferral: string;
  referredBy: string;
  outcome: string;
}

export interface IrcaMiscellaneous extends BaseEntry {
  date: string;
  participants: string;
  timeFrom: string;
  timeTo: string;
  serviceActivity: string;
  notes: string;
  staffSignature: string;
}

export interface IrcaMedicalEmergency extends BaseEntry {
  date: string;
  time: string;
  clientName: string;
  medicalCondition: string;
  actionTaken: string;
  staffSignature: string;
}

export interface IrcaIndividualCounselling extends BaseEntry {
  date: string;
  clientNameAndRegn: string;
  topicDiscussed: string;
  remarks: string;
  counsellorSignature: string;
}

export interface IrcaFamilyCounselling extends BaseEntry {
  date: string;
  clientNameAndRegn: string;
  familyMembers: string;
  topicDiscussed: string;
  remarks: string;
  counsellorSignature: string;
}

export interface IrcaGroupSession extends BaseEntry {
  date: string;
  numParticipants: string;
  namesWithRegn: string;
  topicDiscussed: string;
  remarks: string;
  counsellorSignature: string;
}

export interface IrcaIecBcc extends BaseEntry {
  agencyName: string;
  iecName: string;
  dateOfActivity: string;
  venue: string;
  activityType: string;
  numParticipants: string;
  description: string;
  staffSignature: string;
}

export interface IrcaNetworkDirectory extends BaseEntry {
  date: string;
  orgDetails: string;
  availableServices: string;
  contactPerson: string;
}

// CPLI Types
export interface CpliMedicalFirstAid extends BaseEntry {
    date: string;
    time: string;
    clientName: string;
    medicalAidProvided: string;
    actionTaken: string;
    staffSignature: string;
}

export interface CpliFamilyCounselling extends BaseEntry {
  date: string;
  clientNameAndRegn: string;
  familyMembers: string;
  location: string;
  topicDiscussed: string;
  remarks: string;
  counsellorSignature: string;
}

export interface CpliPeerEducatorLogbook extends BaseEntry {
  date: string;
  numPVs: string;
  sessionTopic: string;
  sessionOutcome: 'Satisfactory' | 'Not satisfactory';
  remarks: string;
  peSignature: string;
  trainerSignature: string;
}

// ODIC Types
export interface OdicIpd extends BaseEntry {
  ipdNo: string;
  dateOfAdmission: string;
  dateOfDischarge: string;
  patientName: string;
  age: string;
  gender: 'Male' | 'Female' | 'Other';
  address: string;
  idNumber: string;
  occupation: string;
  addictionType: string;
  addictionDuration: string;
  previousTreatments: 'Yes' | 'No';
  admittedBy: string;
  diagnosis: string;
  treatmentPlan: string;
  psychiatristName: string;
  counsellorName: string;
  progressNotes: string;
  dischargeCondition: string;
  relapseHistory: string;
  followUpDate: string;
  remarks: string;
}

export interface OdicOpd extends BaseEntry {
  opdNo: string;
  date: string;
  patientName: string;
  age: string;
  gender: 'Male' | 'Female' | 'Other';
  address: string;
  contactNo: string;
  occupation: string;
  addictionType: string;
  addictionDuration: string;
  presentingComplaints: string;
  diagnosis: string;
  doctorName: string;
  counsellorName: string;
  treatmentPrescribed: string;
  adviceGiven: string;
  followUpDate: string;
  feesReceiptNo: string;
  idNumber: string;
}

export interface OdicHalfYearlyReportData {
  // Profile
  orgNameAddress: string;
  centreNameAddress: string;
  contactPersonName: string;
  contactPersonDesignation: string;
  contactPersonAddress: string;
  contactPersonTelephone: string;
  contactPersonMobile: string;
  emailAddress: string;
  reviewPeriod: 'April-September' | 'October-March' | '';
  reviewYear: string;
  firstGrantYear: string;
  lastAidDetails: string;
  bedsGrant: string;
  bedsActual: string;
  
  // Registration
  regOpd: string;
  regIndoor: string;
  avgAge: string;
  femaleClients: string;
  
  // Drug Details & Method
  drugDetails: Record<string, string>;
  methodOfTaking: Record<string, string>;
  
  // Client Details
  sourceOfReferral: Record<string, string>;
  maritalStatus: Record<string, string>;
  education: Record<string, string>;
  employment: Record<string, string>;
  
  // Services
  treatmentOpd: string;
  treatmentIndoor: string;
  stayDuration: Record<string, string>;
  dropOuts: Record<string, string>;
  
  // Counselling
  counsellingGroup: Record<string, string>;
  counsellingIndividual: Record<string, string>;
  counsellingFamily: Record<string, string>;
  
  // Additional Treatment & Recovery
  additionalTreatment: Record<string, string>;
  recovery: Record<string, string>;
}