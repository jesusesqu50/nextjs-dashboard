import Table from '@/app/ui/customers/table';
 
export default async function Page(props: {
    searchParams?: Promise<{
      query?: string;
    }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  return (
    <div className="w-full">
        <Table query={query}/>
      <div className="mt-5 flex w-full justify-center">
      </div>
    </div>
  );
}