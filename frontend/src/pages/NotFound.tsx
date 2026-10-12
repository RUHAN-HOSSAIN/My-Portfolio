import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen grid place-items-center bg-linear-to-tr from-[#0014FF] to-[#FF2CDF] text-white text-3xl font-bold">
      {t("common.notFound")}
    </div>
  );
}
