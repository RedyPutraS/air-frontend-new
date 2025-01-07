interface contentProps {
  row?: any;
}

export default function Content(props: contentProps) {
  const { row = {} } = props;
  const subtitle = row?.subtitle;
  const body = row?.body;
  

  return (
    <div>
      {subtitle && (
        <div className="mt-5 text-lg font-bold sm:text-2xl">{subtitle}</div>
      )}

      <div
        className={`mt-5 text-sm text-gray-600 sm:text-base text-justify`}
        // data-aos="fade-up"
      >
        {body}
      </div>
    </div>
  );
}
