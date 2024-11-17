import { ChangeEvent, FC, useState } from "react";

const UpLoadFiles: FC = () => {
  //------hooks対象開始
  const [files, setFiles] = useState<File[]>([]);

  // ファイル選択時の処理
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files); // 選択されたファイルを配列に変換
    const uniqueFiles = new Map(
      [...files, ...newFiles].map((file) => [file.name, file]), // 重複を排除(キー名としてファイル名、value値としてファイル名を持つmapオブジェクトを生成する。)
    );
    setFiles(Array.from(uniqueFiles.values())); //mapオブジェクトから配列を生成する。
  };

  // ファイル削除の処理
  const deleteFile = (targetFile: File) => {
    const copy = [...files];
    const index = copy.findIndex((file) => file.name === targetFile.name);
    if (index === -1) return;
    copy.splice(index, 1);
    setFiles(copy);
  };
  //------hooks対象終わり

  //------以下はユーティリティ化すること
  // ファイルを Base64 エンコードして文字列で返す関数
  const encodeFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file); // 変換処理を実施して、処理結果の分岐はonLoad, onErrorのいずれかが実行される。
      reader.onload = () => resolve(reader.result?.toString() as string); //成功時に返却されるエンコード文字列
      reader.onerror = (error) => reject(error); //失敗時に返却されるPromise
    });
  };

  // すべてのファイルをエンコードして表示する
  const handleEncodeFiles = async (fileArray: File[]) => {
    if (fileArray.length === 0) return alert("ファイルを選択してくださいね");
    try {
      const encodedFiles = await Promise.all(fileArray.map(encodeFileToBase64));
      console.log("エンコードされたファイル:", encodedFiles);
    } catch (error) {
      console.error("エンコード中にエラーが発生しました:", error);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            {file.name}
            <button onClick={() => deleteFile(file)}>Delete</button>
            <a href={URL.createObjectURL(file)} download={file.name} target="_blank" rel="noopener noreferrer">
              ダウンロード
            </a>
            {/* noopener はリンク先が元のページを操作するリスクを防ぐ。 noreferrer はリンク元情報を隠し、プライバシー保護を強化する */}
            {/* 1. target="_blank" 目的: リンク先を「新しいタブまたはウィンドウ」で開く。 動作: クリックすると、現在のページを維持しながら、新しいタブで指定した href の URL が開かれる。 */}
          </li>
        ))}
      </ul>
      <button onClick={() => handleEncodeFiles(files)}>Encode to Base64</button>
    </div>
  );
};

export default UpLoadFiles;
