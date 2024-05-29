import { FC } from "react";
import { generalTabData } from "@/data/setting";
import CompanydisplayName from "./displayname";
import EditPhone from "./editphone";
import EditEmail from "./editemail";
import EditCurrency from "./editcurrency";

interface Props {}

const GeneralSettings: FC<Props> = ({}) => {

	return (
		<div className="p-4 lg:p-7 lg:lg:px-10 xl:px-20  max-w-[1000px]">
			<div>
				<h1 className="my-4 mb-5 text-[23px] font-[700]">Contact Info</h1>
				<CompanydisplayName
					displayName={generalTabData.basicInfo.displayName}
				/>
				<EditPhone phone={generalTabData.basicInfo.phoneNumber} />
				<EditEmail email={generalTabData.basicInfo.email} />
				<EditCurrency currency={generalTabData.basicInfo.currency} />
				
			</div>
		</div>
	);
};

export default GeneralSettings;
