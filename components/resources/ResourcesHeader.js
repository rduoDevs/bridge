import PageHeader from "../PageHeader";
import TextInput from "../TextInput";

export default function ResourcesHeader({ query, setQuery }) {
  return (
    <PageHeader
      title="Learning Resources"
      description="An archive of resources assembled by SWTSA members and to help newcomers navigate the various fields of technology"
      // descriptionTwo={
      //   <>
      //     Before you begin, you may find it useful to learn{" "}
      //     <a
      //       href="https://docs.google.com"
      //       target="_blank"
      //       rel="noreferrer"
      //       className="text-primary underline"
      //     >
      //       {" "}
      //       how to learn
      //     </a>
      //     .
      //   </>
      // }
      // custom={<TextInput onChange={setQuery} value={query}  /> }
    />
  );
}
