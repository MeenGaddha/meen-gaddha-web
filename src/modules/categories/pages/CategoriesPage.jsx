import React, { useEffect, useState } from "react";
import { getCategoryCollections } from "../services/categoryGames";
import CategoryAccordion from "../components/CategoryAccordion";
import CategoryCard from "../components/CategoryCard";
import CategorySelector from "../components/CategorySelector";
import LoadingScreen from "../../../layouts/LoadingScreen";
import NoInternetScreen from "../../../layouts/NoInternetScreen";
import Hero from "../../home/components/Hero";
import Popup from "../components/Popup";
import MainLayout from "../../../layouts/MainLayout";

export default function CategoriesPage() {
  const [collections, setCollections] = useState([]);
  const [selected, setSelected] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCount, setSelectedCount] = useState(4);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const data = await getCategoryCollections();
        setCollections(data);
      } catch (err) {
        console.error(err);
        setError("حدث خطأ أثناء تحميل الفئات");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCollections();
  }, []);

  if (isLoading) return <LoadingScreen />;
  if (error) return <NoInternetScreen message={error} />;

  return (
    <MainLayout>

    <div dir="rtl">
      <Hero showButtons={false} compact={true} />

      <section className="relative mt-8 md:mt-12 lg:mt-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header section: */}
          <header className="text-center mb-10">
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-4">
              اختر فئاتك وكن قد التحدي 🏆
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              حدد عدد الفئات اللي تبغى تلعبها، وبعدها اختر الأقسام اللي تناسب
              فريقك. كل اختيار يقربك من الفوز! 🔥
            </p>
          </header>

          {/* Category selection buttons */}
          <CategorySelector
            options={[4, 6, 8]}
            selected={selectedCount}
            onSelect={(count) => {
              setSelectedCount(count);
              setSelected([]);
              setShowPopup(false);
            }}
          />
          {showPopup && (
            <Popup
              selectedCount={selectedCount}
              onClose={() => setShowPopup(false)}
            />
          )}

          {/* Add spacing between selector and collections */}
          <div className="container mx-auto py-10 mt-14 space-y-6">
            {/* Looping through each collection returned from the backend.
        For every collection (main group), we render a CategoryAccordion 
        containing its related categories (cards) in a responsive grid layout. 
        Each CategoryCard can be selected or deselected by the user. */}

            {/* collections is an array returned from our backend by (getCategoryCollections()).
          Each element (collection) in that array, like this: id:1, name:"...": */}
            {collections.map((collection) => (
              <CategoryAccordion key={collection.id} title={collection.name}>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {collection.category.map(
                    (
                      category //Mapping through each sub-category
                    ) => (
                      <CategoryCard
                        key={category.id}
                        title={category.category_name}
                        img={category.photo}
                        selected={selected.includes(category.id)}
                        disabled={
                          selected.length >= selectedCount &&
                          !selected.includes(category.id)
                        } //idk
                        onSelect={() =>
                          setSelected((prev) => {
                            const exists = prev.includes(category.id);
                            if (exists) {
                              return prev.filter((id) => id !== category.id);
                            }
                            if (prev.length >= selectedCount) {
                              return prev; // not more the selected
                            }
                            const next = [...prev, category.id];
                            if (next.length === selectedCount) {
                              setShowPopup(true);
                            }
                            return next;
                          })
                        }
                      />
                    )
                  )}
                </div>
              </CategoryAccordion>
            ))}
          </div>
        </div>
      </section>
    </div>
    </MainLayout>
  );
}
