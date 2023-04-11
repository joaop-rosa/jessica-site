import useMedia from "use-media";

export function useBreakpoint() {
  const isSmallerThan525 = useMedia({ maxWidth: "525px" });
  const isSmallerThan600 = useMedia({ maxWidth: "600px" });
  const isSmallerThan900 = useMedia({ maxWidth: "900px" });
  const isSmallerThan1200 = useMedia({ maxWidth: "1200px" });

  return {
    isSmallerThan525,
    isSmallerThan600,
    isSmallerThan900,
    isSmallerThan1200,
  };
}
