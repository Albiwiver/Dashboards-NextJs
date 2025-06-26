/* eslint-disable @next/next/no-img-element */
"use client";

import { FC, useRef, useState } from "react";
import { uploadCsv } from "@/services/orderService";
import { Button } from "@/components/atoms/Button/Button";
import { RxCross2 } from "react-icons/rx";
import { Input } from "@/components/atoms/Input/Input";
import { FaCircleCheck } from "react-icons/fa6";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CsvModal: FC<Props> = ({ isOpen, onClose }) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] || null;
    setFile(selected);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile && droppedFile.type === "text/csv") {
      setFile(droppedFile);
    }
  };

  const handleUpload = async () => {
    const formData = new FormData();

    if (file) {
      formData.append("file", file);
    } else if (url) {
      formData.append("url", url);
    } else {
      return;
    }

    setLoading(true);
    try {
      await uploadCsv(formData);
      setFile(null);
      setUrl("");
      onClose();
    } catch (error) {
      console.error("Error uploading CSV:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center font-urbanist">
      <div className="bg-white rounded-lg flex flex-col w-[680px] h-[640px]">
        <div className="flex justify-between w-full items-center border-b p-8">
          <h2 className="text-xl font-bold">Import customers by CSV</h2>
          <RxCross2
            className="h-6 w-6 text-interface2 cursor-pointer"
            onClick={onClose}
          />
        </div>

        <div className="w-full h-[440px] px-8 py-6 flex flex-col space-y-6 border-b">
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => fileRef.current?.click()}
            className="w-full border-dashed border border-interface2/40 rounded-lg flex h-52 items-center justify-center cursor-pointer"
          >
            <div className="flex justify-center items-center flex-col space-y-4">
              <img
                src="/assets/icons/csv-file-icon.svg"
                alt="file icon"
                className="w-14 h-14"
              />
              <div className="flex flex-col text-center space-y-1">
                <span className="text-sm font-medium text-primary">
                  {file ? file.name : "Select a CSV file to upload"}
                </span>
                {!file && (
                  <span className="text-xs text-interface2">
                    or drag and drop it here
                  </span>
                )}
              </div>
              <input
                ref={fileRef}
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>

          <div className="w-full flex flex-col space-y-2">
            <span className="text-base font-bold">Or upload from a URL</span>
            <Input
              placeholder="Add the file URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <div className="flex w-full space-x-2 items-center mt-4">
              <FaCircleCheck className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-interface1">
                Overwrite existing customers that have the same email or phone
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between p-8 items-center">
          <span className="text-interface2 text-sm font-medium">
            Need help importing customers?
          </span>
          <div className="flex space-x-4">
            <Button className="px-6 py-3" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button
              className="px-6 py-3"
              variant="primary"
              onClick={handleUpload}
              disabled={loading || (!file && !url)}
            >
              {loading ? "Uploading..." : "Import"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
