import PageHeader from "@/components/Utils/PageHeader";
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAllGalleryPost } from "@/hooks/useReactQuery";
import { Loader2 } from "lucide-react";

function Gallery() {
  const { data, isLoading} = useAllGalleryPost();
  return (
    <div className="w-full ">
      <PageHeader
        title="GALLERY"
        subtitle="Get Franchise for starting a course at low investment to provide quality education."
      />
      <div className="max-w-[85rem] py-20 mx-auto px-4 ">
        {isLoading ? (
          <div className="w-full h-20 grid place-content-center">
            <Loader2 className="animate-spin" />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-6">
            {data?.posts?.map((item, index) => {
              return (
                <Card
                  data-aos="fade-up"
                  className="pt-0 overflow-hidden group"
                  key={index}
                >
                  <CardHeader className="px-0 w-full h-60 border-b overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
                      src={item.image}
                      alt=""
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className='capitalize'>{item?.title?.toLowerCase()}</CardTitle>
                    <CardDescription className='capitalize'>{item?.description?.toLowerCase()}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
