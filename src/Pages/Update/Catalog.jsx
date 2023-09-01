import React from "react";
import { Button, Collapse } from "antd";
import { FileEdit, Trash } from "lucide-react";
import { Input, message } from "antd";
import { Rating2 } from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { mainActions } from "../../context/mainslice";
import { deleteData, updateData } from "../../API";
import { useNavigate } from "react-router-dom";
import { deleteAllData } from "../../API";

export const Catalog = ({ data, index, setShowInputDesc, showInputDesc }) => {
  const CatalogRef = React.useRef(null);
  const catalogdescRef = React.useRef(null);
  let catalog = useSelector((state) => state.main.catalog);
  const [changeCatalogValue, setChangeCatalogValue] = React.useState(-1);

  const [edit, setEdit] = React.useState(-1);
  const descRef = React.useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = data.catalog.map((e, i) => {
    return {
      key: i,
      label: (
        <div>
          {changeCatalogValue === i ? (
            <div className="flex items-center gap-2">
              <Input ref={CatalogRef} defaultValue={e.catalog_number} />
              <Button
                onClick={() => {
                  dispatch(
                    mainActions.changeCatalogValue({
                      index: index,
                      catalog_number: CatalogRef.current.input.value,
                    })
                  );
                  setChangeCatalogValue(-1);
                }}
              >
                Save
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <p>
                {catalog[0]?.catalog_number && catalog[0]?.index === index
                  ? catalog[0]?.catalog_number
                  : e.catalog_number}
              </p>
              {edit !== -1 && (
                <Button onClick={() => setChangeCatalogValue(i)}>Change</Button>
              )}
            </div>
          )}
        </div>
      ),
      children: (
        <div>
          {edit === i ? (
            <>
              <Rating2 cat_number={e.catalog_number} index={i} />
            </>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <p>{e.desc}</p>
                <FileEdit
                  className="cursor-pointer"
                  onClick={() => {
                    if (
                      catalog.length !== 0 &&
                      showInputDesc !== "" &&
                      showInputDesc !== data._id
                    ) {
                      message.error("Please save the previous edit");
                      return;
                    }

                    setEdit(i);
                    const newCatalog = data.catalog.filter(
                      (e, index) => index !== i
                    );
                    localStorage.setItem("ID", data._id);
                    dispatch(mainActions.copyCatalog(data.catalog));
                    localStorage.setItem("desc", data.desc);
                  }}
                />
                <Trash
                  className="cursor-pointer"
                  onClick={async () => {
                    const confirmation = window.confirm(
                      "Are you sure you want to delete this catalog?"
                    );
                    if (!confirmation) return;
                    try {
                      const response = await deleteAllData({
                        type: 1,
                        id: data._id,
                        catalog_id: e._id,
                      });
                      message.success("Successfully Deleted Data");
                      navigate("/list");
                    } catch (e) {
                      console.log(e);
                      message.error("Error");
                    }
                  }}
                />
              </div>
            </>
          )}
        </div>
      ),
    };
  });

  const descUpdateHandler = async () => {
    try {
      const response = await updateData({
        type: 1,
        id: data._id,
        data: { desc: descRef.current.input.value, catalog: data.catalog },
      });
      message.success("Successfully Updated Data");
      navigate("/list");
    } catch (e) {
      console.log(e);
      message.error("Error");
    }
  };

  return (
    <>
      <div className="w-full flex justify-center mt-10 mb-3">
        <div className="w-9/12 flex gap-2">
          {!showInputDesc && (
            <p className="px-4 py-1 rounded bg-blue-500 text-white">
              {data.desc}
            </p>
          )}
          {showInputDesc === data._id ? (
            <div className="w-full">
              <div className="flex items-center gap-2">
                <Input ref={descRef} defaultValue={data.desc} />
                <Button onClick={descUpdateHandler}>Save</Button>
              </div>
              <div className="w-full flex justify-center">
                <div className="w-3/6 flex flex-col gap-3">
                  <div>
                    <h3 className="p-2">Catalog</h3>
                    <Input
                      className="w-full"
                      ref={catalogdescRef}
                      placeholder="Catalog Name"
                    />
                  </div>
                  <Button
                    className="w-full bg-blue-700 text-white"
                    onClick={() => {
                      const newcatalog = catalogdescRef.current.input.value;
                      catalogdescRef.current.input.value = "";
                      data.catalog = [
                        ...data.catalog,
                        {
                          catalog_number: newcatalog,
                          rating: [],
                        },
                      ];

                      dispatch(
                        mainActions.changeCatalogNumber([...data.catalog])
                      );
                    }}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <FileEdit
                className="cursor-pointer"
                onClick={() => {
                  setShowInputDesc(data._id);
                  localStorage.setItem("ID", data._id);
                  localStorage.setItem("desc", data.desc);
                }}
              />
              <Trash
                className="cursor-pointer"
                onClick={async () => {
                  const confirmation = window.confirm(
                    "Are you sure you want to delete this Description"
                  );
                  if (!confirmation) return;
                  try {
                    const response = await deleteData(data._id);
                    message.success("Successfully Deleted Data");
                    navigate("/list");
                  } catch (e) {
                    console.log(e);
                    message.error("Error");
                  }
                }}
              />
            </>
          )}
        </div>
      </div>
      <div className="w-full p-2 flex justify-center">
        <Collapse
          className="w-5/6"
          bordered={data.length === 0 ? false : true}
          items={items}
          defaultActiveKey={[0]}
        />
      </div>
    </>
  );
};
