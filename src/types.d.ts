// interface Entry {
//   text: string;
// }

interface Entry {
  job: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string;
  tools: string;
}


type AddEntry = (
  job: string,
  location: string,
  startDate: string,
  endDate: string,
  responsibilities: string,
  tools: string,
) => void;
